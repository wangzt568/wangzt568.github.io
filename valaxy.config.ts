import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',
  // Generate full feeds from the rendered HTML and normalize index routes.
  modules: { rss: { enable: false } },
  themeConfig: {
    bg_image: {
      enable: true,
      url: '/img/cover/nightsearch2.png',
      dark: '/img/cover/night1.png',
      opacity: 1,
    },
    banner: { enable: true, title: 'ZetianNotes' },
    say: { enable: false, api: '', hitokoto: { enable: false, api: '' } },
    pages: [{ name: 'About', url: '/about/', icon: 'i-ri-user-line', color: '#0078E7' }],
    footer: { since: 2020, powered: false, icon: { enable: false } },
  },
  unocss: { safelist: ['i-ri-user-line', 'i-ri-github-line', 'i-ri-rss-line'] },
})
