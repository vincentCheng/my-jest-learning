module.exports = (on: any, config: { testingType: string }) => {
  if (config.testingType === "component") {
    require("@cypress/react/plugins/react-scripts")(on, config);
  }
  return config;
};
