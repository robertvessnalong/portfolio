// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
  css: ["~/assets/css/main.css"],
  alias: {
    "@utils": "./utils/",
  },
});
