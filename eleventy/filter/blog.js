module.exports = [
  [
    "featured",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !!page.data.featured?.isFeatured);
    },
  ],
  [
    "portfolio",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !!page.data.isPortfolio);
    },
  ],
  [
    "notPortfolio",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !page.data.isPortfolio);
    },
  ],
];
