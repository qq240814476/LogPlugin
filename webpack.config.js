const path = require("path");
const LogPlugin = require("./My-plugins/log-plugin.js");
//! 默认配置
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  //处理loader查询路径
  resolveLoader: {
    modules: ["node_modules", "./My-Loaders"]
  },
  plugins: [new LogPlugin()]
};
