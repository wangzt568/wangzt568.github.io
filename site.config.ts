import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://wangzt568.github.io/',
  title: 'ZetianNotes',
  lang: 'en',
  timezone: 'America/Los_Angeles',
  author: { name: 'Wang,Zetian', avatar: '/img/profile.jpg', link: 'https://wangzt568.github.io/about/' },
  favicon: '/img/favicon.png',
  social: [
    { name: 'RSS', link: '/atom.xml', icon: 'i-ri-rss-line', color: 'orange' },
    { name: 'GitHub', link: 'https://github.com/wangzt568/', icon: 'i-ri-github-line', color: '#6e5494' },
  ],
  search: { enable: true, provider: 'fuse' },
  comment: { enable: true },
  sponsor: { enable: false },
})
