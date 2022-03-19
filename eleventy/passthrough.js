module.exports.passthrough = [
  "src/admin",
  "content/uploads",
  "src/assets/js/main.min.js",
  "src/assets/css/main.min.css",

  ...(process.env.NODE_ENV === "development"
    ? ["src/assets/js/main.js", "src/assets/css/main.css", "src/assets/css/main.css.map"]
    : []),
];
