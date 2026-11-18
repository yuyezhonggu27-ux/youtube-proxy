const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://kissanime.com.cv",
  changeOrigin: true,
  ws: true,
  xfwd: true,
  on: {
    proxyReq: (proxyReq) => {
      proxyReq.setHeader("User-Agent", "Mozilla/5.0");
    }
  }
}));

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("YouTube proxy started on port " + PORT);
});
