import os
import re
import sys
import time
import urllib.parse as up

import requests
from bs4 import BeautifulSoup

BASE = "https://frenchthermic.fr"
OUT = os.path.join(os.path.dirname(__file__), "site")
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; SiteMirror/1.0)"}

visited_pages = set()
to_visit = [BASE + "/"]
downloaded_assets = set()

session = requests.Session()
session.headers.update(HEADERS)


def url_to_path(url):
    parsed = up.urlsplit(url)
    path = parsed.path
    if path == "" or path == "/":
        return "index.html"
    if path.endswith("/"):
        return path.lstrip("/") + "index.html"
    return path.lstrip("/")


def local_path_for(url):
    return os.path.join(OUT, url_to_path(url))


def is_internal(url):
    parsed = up.urlsplit(url)
    return parsed.netloc == "" or parsed.netloc == up.urlsplit(BASE).netloc


def normalize(url, current_url):
    if not url:
        return None
    url = url.strip()
    if url.startswith(("mailto:", "tel:", "javascript:", "#", "data:")):
        return None
    full = up.urljoin(current_url, url)
    full, _frag = up.urldefrag(full)
    return full


def fetch(url):
    try:
        r = session.get(url, timeout=30)
        r.raise_for_status()
        return r
    except Exception as e:
        print(f"  ! failed {url}: {e}")
        return None


def save_binary(url, content):
    path = local_path_for(url)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as f:
        f.write(content)


def download_asset(url):
    if url in downloaded_assets:
        return
    if not is_internal(url):
        return
    downloaded_assets.add(url)
    path = local_path_for(url)
    if os.path.exists(path):
        return
    r = fetch(url)
    if r is None:
        return
    save_binary(url, r.content)
    print(f"  asset: {url}")
    # If it's a CSS file, parse for further url(...) references
    ctype = r.headers.get("Content-Type", "")
    if "css" in ctype or url.endswith(".css"):
        process_css(url, r.text)


def process_css(css_url, text):
    for m in re.finditer(r"url\(\s*(['\"]?)([^'\")]+)\1\s*\)", text):
        ref = m.group(2)
        full = normalize(ref, css_url)
        if full and is_internal(full):
            download_asset(full)


def rewrite_link(url, current_url):
    full = normalize(url, current_url)
    if full is None:
        return url
    if not is_internal(full):
        return full
    # internal link -> relative path on disk
    target_path = url_to_path(full)
    current_path = url_to_path(current_url)
    current_dir = os.path.dirname(current_path)
    rel = os.path.relpath(target_path, current_dir if current_dir else ".")
    rel = rel.replace(os.sep, "/")
    return rel


def process_page(url):
    r = fetch(url)
    if r is None:
        return
    ctype = r.headers.get("Content-Type", "")
    if "html" not in ctype:
        save_binary(url, r.content)
        return

    soup = BeautifulSoup(r.text, "html.parser")

    # Collect & rewrite links/assets
    tag_attrs = [
        ("a", "href"),
        ("link", "href"),
        ("script", "src"),
        ("img", "src"),
        ("img", "srcset"),
        ("source", "src"),
        ("source", "srcset"),
        ("video", "src"),
        ("audio", "src"),
        ("iframe", "src"),
    ]

    for tag_name, attr in tag_attrs:
        for tag in soup.find_all(tag_name):
            val = tag.get(attr)
            if not val:
                continue
            if attr == "srcset":
                parts = []
                for entry in val.split(","):
                    entry = entry.strip()
                    if not entry:
                        continue
                    bits = entry.split()
                    src = bits[0]
                    full = normalize(src, url)
                    if full and is_internal(full):
                        download_asset(full)
                        new_src = rewrite_link(src, url)
                        bits[0] = new_src
                    parts.append(" ".join(bits))
                tag[attr] = ", ".join(parts)
                continue

            full = normalize(val, url)
            if full is None:
                continue

            if tag_name == "a" and is_internal(full):
                # queue page for crawling
                if full not in visited_pages and full not in to_visit:
                    pp = up.urlsplit(full).path
                    if not re.search(r"\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|ico|woff|woff2|ttf)$", pp, re.I):
                        to_visit.append(full)
                tag[attr] = rewrite_link(val, url)
            elif tag_name in ("link", "script", "img", "source", "video", "audio") and is_internal(full):
                download_asset(full)
                tag[attr] = rewrite_link(val, url)
            elif not is_internal(full):
                pass  # leave external links as-is

    # Rewrite inline style url(...) references
    for tag in soup.find_all(style=True):
        style = tag["style"]

        def repl(m):
            ref = m.group(2)
            full = normalize(ref, url)
            if full and is_internal(full):
                download_asset(full)
                return f"url({rewrite_link(ref, url)})"
            return m.group(0)

        tag["style"] = re.sub(r"url\(\s*(['\"]?)([^'\")]+)\1\s*\)", repl, style)

    # Save the HTML page
    path = local_path_for(url)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(str(soup))
    print(f"page: {url} -> {path}")


def main():
    count = 0
    while to_visit:
        url = to_visit.pop(0)
        norm = up.urldefrag(url)[0]
        if norm in visited_pages:
            continue
        visited_pages.add(norm)
        process_page(norm)
        count += 1
        if count > 200:
            print("Reached page limit, stopping.")
            break
        time.sleep(0.2)

    print(f"\nDone. {len(visited_pages)} pages, {len(downloaded_assets)} assets.")


if __name__ == "__main__":
    main()
