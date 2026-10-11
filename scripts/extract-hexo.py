"""Read the archived Hexo feed without needing the original Hexo sources."""
import json
from pathlib import Path
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

ns = {'a': 'http://www.w3.org/2005/Atom'}
root = ET.parse('legacy/hexo/atom.xml').getroot()
posts = []
for entry in root.findall('a:entry', ns):
    links = entry.findall('a:link', ns)
    link = next(x for x in links if x.get('rel', 'alternate') == 'alternate')
    post = {
        'title': entry.find('a:title', ns).text,
        'date': entry.find('a:published', ns).text,
        'updated': entry.find('a:updated', ns).text,
        'path': urlparse(link.get('href')).path,
        'html': entry.find('a:content', ns).text,
        'categories': [], 'tags': [],
    }
    for category in entry.findall('a:category', ns):
        key = 'categories' if '/categories/' in category.get('scheme', '') else 'tags'
        post[key].append(category.get('term'))
    posts.append(post)
Path('.migration').mkdir(exist_ok=True)
Path('.migration/posts.json').write_text(json.dumps(posts, ensure_ascii=False, indent=2))
print(f'Extracted {len(posts)} posts from the Hexo Atom feed')
