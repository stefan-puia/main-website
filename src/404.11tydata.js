module.exports = {
  eleventyComputed: {
    title: (data) => data.config.errors.http_404.title,
  },
};
