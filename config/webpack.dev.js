const path = require("path");

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { HotModuleReplacementPlugin } = require("webpack");

const prodConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.styl$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, "../dist"),
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, prodConfig);
