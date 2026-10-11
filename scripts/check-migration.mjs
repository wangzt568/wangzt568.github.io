import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import { parseHTML } from 'linkedom'

// The homepage is paginated; the archive is the complete post listing.
const archives = parseHTML(fs.readFileSync('dist/archives/index.html', 'utf8')).document
const archiveLinks = new Set(
  [...archives.querySelectorAll('a[href]')].map(link =>
    decodeURI(link.getAttribute('href')).replace(/\/$/, ''),
  ),
)
const search = JSON.parse(fs.readFileSync('dist/valaxy-fuse-list.json', 'utf8'))
const feed = fs.readFileSync('dist/atom.xml', 'utf8')
const normalize = text => text.replace(/\s+/g, ' ').trim()
let count = 0
function check(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name)
    if (item.isDirectory()) check(file)
    else if (item.name === 'index.html') {
      const route = '/' + path.relative('legacy/hexo', directory) + '/'
      const original = parseHTML(fs.readFileSync(file, 'utf8')).document
      const source = original.querySelector('.post-content')
      const built = parseHTML(fs.readFileSync(path.join('dist/posts', route, 'index.html'), 'utf8')).document
      const body = built.querySelector('.markdown-body')
      const oldPage = parseHTML(fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8')).document
      assert(oldPage.querySelector('link[rel=canonical]')?.getAttribute('href')?.includes('/posts' + route.slice(0, -1)), `Missing old URL redirect: ${route}`)
      assert(body, `Missing rendered content: ${route}`)
      const title = original.querySelector('h1.post-title').textContent
      assert(archiveLinks.has('/posts' + route.slice(0, -1)), `Missing archive listing: ${title}`)
      assert(search.some(item => decodeURI(item.link) === '/posts' + route.slice(0, -1)), `Missing search entry: ${route}`)
      assert(feed.includes(`https://wangzt568.github.io/posts${route}`), `Missing feed entry: ${route}`)
      for (const heading of source.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]')) {
        assert(built.getElementById(heading.id), `Lost heading anchor: ${route}#${heading.id}`)
      }
      const before = [...source.querySelectorAll('pre code')].map(node => { node.querySelectorAll('.line-numbers-rows').forEach(n => n.remove()); return node.textContent })
      const after = [...body.querySelectorAll('pre code')].map(node => node.textContent)
      assert.equal(after.length, before.length, `Lost code blocks: ${route}`)
      before.forEach((code, i) => assert.equal(normalize(after[i]), normalize(code), `Changed code: ${route}, block ${i}`))
      for (const image of source.querySelectorAll('img[src]')) {
        const src = image.getAttribute('src')
        assert([...body.querySelectorAll('img[src]')].some(n => decodeURI(n.getAttribute('src')) === decodeURI(src)), `Lost image: ${src}`)
        if (src.startsWith('/')) assert(fs.existsSync(path.join('dist', decodeURI(src))), `Missing image asset: ${src}`)
      }
      count++
    }
  }
}
check('legacy/hexo/2020')
check('legacy/hexo/2021')
assert.equal(count, 7)
for (const kind of ['categories', 'tags', 'archives']) {
  function verifyRedirects(directory) {
    for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!item.isDirectory()) continue
      const source = path.join(directory, item.name)
      verifyRedirects(source)
      if (fs.existsSync(path.join(source, 'index.html'))) {
        const output = path.join('dist', path.relative('legacy/hexo', source), 'index.html')
        assert(fs.readFileSync(output, 'utf8').includes('http-equiv="refresh"'), `Missing legacy redirect: ${source}`)
      }
    }
  }
  verifyRedirects(`legacy/hexo/${kind}`)
}
for (const page of ['archives', 'categories', 'tags', 'about']) assert(fs.existsSync(`dist/${page}/index.html`), `Missing page: ${page}`)
console.log(`Verified ${count} posts, original URLs, heading anchors, code blocks, images, archive listings, search, feeds and legacy redirects`)
