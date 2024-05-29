const path = require("path");

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@": path.resolve(__dirname, "./"),
    },
    extensions: [".js", ".ts", ".tsx"],
  };

  return config;
};
