# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

    "build": "webpack --mode=production --node-env=production",

"build:dev": "webpack --config/webpack.prod.js",
"build:prod": "webpack --mode=production --node-env=production",
"serve": "webpack serve --mode=development",
"start": "webpack serve --config/webpack.dev.js"
to bundle your application
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
? MiniCssExtractPlugin.loader
: "style-loader";

const config = {
entry: "./src/index.js",
output: {
path: path.resolve(**dirname, "../dist"),
filename: "bundle.js",
clean: true,
},
target: "web",
devtool: "source-map",
devServer: {
hot: true,
compress: true,
static: path.join(**dirname, "../dist"),
port: 3000,
open: true,
historyApiFallback: true,
},
plugins: [
new HtmlWebpackPlugin({
template: "public/index.html",
}),
new HotModuleReplacementPlugin(),
new ReactRefreshWebpackPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/

],
module: {
rules: [
{
test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.styl$/i,
use: [stylesHandler, "css-loader", "postcss-loader", "stylus-loader"],
},
{
test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
type: "asset",
},

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],

},
};

module.exports = () => {
if (isProduction) {
config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());

} else {
config.mode = "development";
}
return config;
};
