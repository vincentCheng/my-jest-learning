import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    // setupNodeEvents(on, config) {},
    specPattern: "src/**/*.spec.{js,jsx,ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
