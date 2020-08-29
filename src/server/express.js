import express from "express";
import path from "path";
import webpack from "webpack";
import config from "../../config/webpack.dev";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, config.devServer);
const hotMiddleware = webpackHotMiddleware(compiler);

const staticMiddleware = express.static("dist");

const server = express();

server.use(devMiddleware);
server.use(hotMiddleware);
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Server is listening");
});
