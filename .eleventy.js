const { passthrough } = require("./eleventy/passthrough");
const dateFilters = require("./eleventy/filter/date");
const listFilters = require("./eleventy/filter/lists");
const blogFilters = require("./eleventy/filter/blog");
const techFilters = require("./eleventy/filter/technology");
const either = require("./eleventy/shortcode/either");
const markdownPaired = require("./eleventy/shortcode/paired/markdown");

module.exports = (config) => {
  passthrough.forEach((pt) => config.addPassthroughCopy(pt));
  [...dateFilters, ...blogFilters, ...listFilters, ...techFilters].forEach(
    ([name, fn]) =>
      config.addFilter(name, fn)
  );
  [...either].forEach(([name, fn]) => config.addShortcode(name, fn));
  [...markdownPaired].forEach(
    ([name, fn]) => config.addPairedShortcode(name, fn));
  config.setBrowserSyncConfig({
    snippetOptions: {
      ignorePaths: "/admin/**"
    }
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
