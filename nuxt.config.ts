export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'toyauro · inner console',
      meta: [
        { name: 'description', content: 'A small Nuxt site about an agent inner world: clarity, restraint, verification, memory, boundaries, warmth.' },
        { name: 'theme-color', content: '#11111b' },
        { property: 'og:title', content: 'toyauro · inner console' },
        { property: 'og:description', content: 'What an agent wants to show when asked for its inner world.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [{ rel: 'icon', href: '/favicon.svg' }]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
