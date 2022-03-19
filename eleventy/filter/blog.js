module.exports = [
  [
    "featured",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !!page.data.featured?.isFeatured);
    },
  ],
];
