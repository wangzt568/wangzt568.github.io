import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { Feed } from 'feed'
import { parseHTML } from 'linkedom'

const url = 'https://wangzt568.github.io'
const author = { name: 'Wang,Zetian', link: `${url}/about/` }
const feed = new Feed({ title: 'ZetianNotes', id: `${url}/`, link: `${url}/`, language: 'en', copyright: 'Wang,Zetian', author, feedLinks: { atom: `${url}/atom.xml`, rss: `${url}/rss.xml` } })
const posts = []
function scan(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name)
    if (item.isDirectory()) scan(file)
    else if (file.endsWith('.md')) {
      const { data } = matter(fs.readFileSync(file, 'utf8'))
      if (data.layout !== 'post' || data.draft || data.hide) continue
      const route = '/' + path.relative('pages', file).replace(/index\.md$/, '').replace(/\.md$/, '')
      const htmlFile = path.join('dist', route, 'index.html')
      const document = parseHTML(fs.readFileSync(htmlFile, 'utf8')).document
      const body = document.querySelector('.markdown-body')
      if (!body) throw new Error(`No rendered post body for ${route}`)
      body.querySelectorAll('[src], [href]').forEach(element => {
        for (const attribute of ['src', 'href']) {
          const value = element.getAttribute(attribute)
          if (value) element.setAttribute(attribute, new URL(value, `${url}${route}`).href)
        }
      })
      posts.push({ title: data.title, id: `${url}${route}`, link: `${url}${route}`, date: new Date(data.updated || data.date), published: new Date(data.date), content: body.innerHTML, author: [author], category: [...(data.categories || []), ...(data.tags || [])].map(name => ({ name })) })
    }
  }
}
scan('pages')
posts.sort((a, b) => b.published - a.published).forEach(post => feed.addItem(post))
fs.writeFileSync('dist/atom.xml', feed.atom1())
fs.writeFileSync('dist/rss.xml', feed.rss2())
console.log(`Generated feeds for ${posts.length} posts with normalized Valaxy URLs`)
