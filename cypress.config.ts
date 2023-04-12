import { defineConfig } from "cypress";
import webpackConfig from "./webpack.config";

export default defineConfig({
  // component: {
  //   // setupNodeEvents(on, config) {},
  //   specPattern: "src/**/*.spec.{js,jsx,ts,tsx}",
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
  },
});
