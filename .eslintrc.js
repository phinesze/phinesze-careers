module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "vue/multi-word-component-names": "off",
  },
};
