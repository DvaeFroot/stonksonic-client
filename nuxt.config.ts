// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  routeRules: {
    '/': {
      redirect: "http://localhost:3000/bridge"
    },
    '/game': {
      ssr: false
    }
  }
})
