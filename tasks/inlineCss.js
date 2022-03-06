const critical = require("critical");

critical.generate({
  inline: true,
  base: "./www",
  src: "index.html",
  target: "index.html",
  width: 1300,
  height: 900,
  css: ["build/fireenjin.css"],
});
