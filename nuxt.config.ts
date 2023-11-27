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
  app: {
    head: {
      bodyAttrs: {
        class: "w-screen h-screen bg-gradient-to-r from-[#108dc7] to-[#ef8e38]",
      },
    },
  },
});
