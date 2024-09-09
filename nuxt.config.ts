// https://nuxt.com/docs/api/configuration/nuxt-config
import * as os from "os";

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
  vite: {
    server: {
      fs: {
        allow: [`${os.homedir()}/node_modules`],
      },
    },
  },
});
