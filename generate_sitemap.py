#!/usr/bin/env python3
"""Reads blog.html, extracts all blog post slugs, generates sitemap.xml"""
import re
from datetime import date

BASE_URL = "https://theglowwell.com"
TODAY = date.today().strftime("%Y-%m-%d")

with open("blog.html", "r") as f:
    html = f.read()

# Extract slugs from onclick="window.location='/{slug}'" patterns
slugs = re.findall(r"window\.location='\/([^']+)'", html)
# Dedupe and filter out non-blog pages
skip = {'glowscan-v2', 'blog', 'resources', 'playbook', 'index.html', 'blog.html', 'resources.html', 'glowscan-v2.html', ''}
blog_slugs = list(dict.fromkeys(s for s in slugs if s not in skip and s.endswith('.html')))

static_pages = [
    (f"{BASE_URL}/", "1.0", "daily"),
    (f"{BASE_URL}/glowscan-v2", "0.9", "daily"),
    (f"{BASE_URL}/blog", "0.8", "weekly"),
    (f"{BASE_URL}/resources", "0.7", "weekly"),
    (f"{BASE_URL}/playbook", "0.7", "weekly"),
]

urls = ""
for url, priority, freq in static_pages:
    urls += f"""  <url>
    <loc>{url}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{priority}</priority>
  </url>\n"""

for slug in blog_slugs:
    urls += f"""  <url>
    <loc>{BASE_URL}/{slug}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n"""

sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}</urlset>"""

with open("sitemap.xml", "w") as f:
    f.write(sitemap)

print(f"Generated sitemap.xml with {len(blog_slugs)} blog posts + {len(static_pages)} static pages")
