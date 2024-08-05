import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  baseURL: 'http://localhost:3000/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  pinia: {
    autoImports: ['defineStore']
  },

  imports: {
    dist: ['~/stores']
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  components: {
    global: true,
    dirs: [
      { path: '~/components/UI' },
      '~/components',
    ]
  }

})
