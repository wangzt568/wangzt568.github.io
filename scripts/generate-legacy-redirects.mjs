import fs from 'node:fs'
import path from 'node:path'

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
let count = 0
function scan(directory, kind) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!item.isDirectory()) continue
    const source = path.join(directory, item.name)
    scan(source, kind)
    if (!fs.existsSync(path.join(source, 'index.html'))) continue
    const name = path.relative(`legacy/hexo/${kind}`, source)
    const target = kind === 'archives' ? '/archives/' : `/${kind}/?${kind === 'tags' ? 'tag' : 'category'}=${encodeURIComponent(name)}`
    const output = path.join('dist', kind, name, 'index.html')
    fs.mkdirSync(path.dirname(output), { recursive: true })
    fs.writeFileSync(output, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${escape(target)}"><link rel="canonical" href="https://wangzt568.github.io${escape(target)}"><title>Moved | ZetianNotes</title></head><body><a href="${escape(target)}">Continue to ZetianNotes</a></body></html>\n`)
    count++
  }
}
for (const kind of ['categories', 'tags', 'archives']) scan(`legacy/hexo/${kind}`, kind)
console.log(`Generated ${count} redirects for old tag, category and archive links`)
