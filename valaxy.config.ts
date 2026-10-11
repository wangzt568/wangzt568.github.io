import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',
  // Generate full feeds from the rendered HTML and normalize index routes.
  modules: { rss: { enable: false } },
  themeConfig: {
    banner: { enable: true, title: 'ZetianNotes' },
    pages: [{ name: 'About', url: '/about/', icon: 'i-ri-user-line', color: '#0078E7' }],
    footer: { since: 2020 },
  },
  unocss: { safelist: ['i-ri-user-line', 'i-ri-github-line', 'i-ri-rss-line'] },
})
