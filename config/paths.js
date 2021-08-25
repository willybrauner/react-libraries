const appRoot = require("app-root-path");

module.exports = {
  // root folder
  root: appRoot.resolve(""),
  // Skeletons path
  skeletonsPath: appRoot.resolve("config/skeletons"),
  // packages path
  packagesPath: appRoot.resolve("packages"),
  //
  storiesPath: appRoot.resolve("storybook/stories")
};
