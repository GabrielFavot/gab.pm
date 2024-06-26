// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-icon', '@nuxtjs/tailwindcss'],
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
