const { passthrough } = require("./eleventy/passthrough");
const dateFilters = require("./eleventy/filter/date");
const blogFilters = require("./eleventy/filter/blog");
const markdownPaired = require("./eleventy/shortcode/paired/markdown");

module.exports = (config) => {
  passthrough.forEach((pt) => config.addPassthroughCopy(pt));
  [...dateFilters, ...blogFilters].forEach(([name, fn]) => config.addFilter(name, fn));
  [...markdownPaired].forEach(([name, fn]) =>
    config.addPairedShortcode(name, fn)
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};