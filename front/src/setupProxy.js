
const proxy = require("http-proxy-middleware");
const PORT = process.env.PORT || 4000
module.exports = app => {
  app.use(proxy("/api/*", { target: "http://localhost:"+PORT+"/" }));
};