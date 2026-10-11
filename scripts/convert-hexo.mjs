import fs from 'node:fs'
import path from 'node:path'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import { parseHTML } from 'linkedom'

const converter = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' })
converter.use(gfm)
converter.addRule('codeBlocks', {
  filter: node => node.nodeName === 'PRE',
  replacement: (_, node) => {
    const code = node.querySelector('code') || node
    const detected = (code.className.match(/(?:language|lang)-([\w-]+)/) || [])[1] || ''
    const language = detected === 'none' ? 'text' : detected
    const text = code.textContent.replace(/\n$/, '')
    const fence = '`'.repeat(Math.max(3, ...[...text.matchAll(/`+/g)].map(m => m[0].length + 1)))
    return `\n\n${fence}${language}\n${text}\n${fence}\n\n`
  },
})
converter.addRule('headingAnchors', {
  filter: node => /^H[1-6]$/.test(node.nodeName) && node.id,
  replacement: (content, node) => `\n\n${'#'.repeat(Number(node.nodeName[1]))} ${content} {#${node.id}}\n\n`,
})
const posts = JSON.parse(fs.readFileSync('.migration/posts.json', 'utf8'))
for (const post of posts) {
  const published = parseHTML(fs.readFileSync(path.join('legacy/hexo', post.path, 'index.html'), 'utf8')).document
  const source = published.querySelector('.post-content')
  if (!source) throw new Error(`Missing post body: ${post.path}`)
  const { document } = parseHTML(`<html><body>${source.innerHTML}</body></html>`)
  document.querySelectorAll('a.headerlink, .line-numbers-rows').forEach(node => node.remove())
  document.querySelectorAll('figure.highlight').forEach(figure => {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    const source = figure.querySelector('td.code pre')
    if (!source) throw new Error(`Unknown Hexo code block: ${post.path}`)
    code.textContent = source.textContent
    code.className = `language-${[...figure.classList].find(c => c !== 'highlight') || ''}`
    pre.append(code)
    figure.replaceWith(pre)
  })
  // Native post routes with redirects retain existing bookmarks.
  const filename = path.join('pages/posts', post.path, 'index.md')
  fs.mkdirSync(path.dirname(filename), { recursive: true })
  const fields = { title: post.title, date: post.date, updated: post.updated, layout: 'post', from: post.path, categories: post.categories, tags: post.tags }
  const frontmatter = Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')
  const markdown = converter.turndown(document.body.innerHTML)
  fs.writeFileSync(filename, `---\n${frontmatter}\n---\n\n${markdown}\n`)
  console.log(`${post.title}: ${filename}`)
}
