// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  components: {
    dirs: [
      "~/components/atoms",
      "~/components/molecules",
      "~/components/organisms",
      "~/components",
    ],
  },
});
