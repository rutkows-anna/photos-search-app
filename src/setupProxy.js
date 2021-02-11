const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/nautocomplete", {
      target: "https://unsplash.com",
      secure: false,
      changeOrigin: true
    })
  );
}