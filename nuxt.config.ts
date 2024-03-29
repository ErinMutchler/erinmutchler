// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/normalize.css',
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    contentHead: false,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
