require("@babel/runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
require("./main.css");
require("./index.html");

const a = async (message) => {
  console.log("start");
  await console.log(message);
  console.log("finish");
};

a("Jeff");
