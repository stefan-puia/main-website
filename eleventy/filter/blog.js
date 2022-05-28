module.exports = [
  [
    "featured",
    (pages) => {
      return [...(pages ?? [])].filter(
        (page) => !!page.data.featured?.isFeatured);
    }
  ],
  [
    "portfolio",
    (pages) => {
      return [...(pages ?? [])].filter(
        (page) => !!page.data?.portfolio?.isPortfolio);
    }
  ],
  [
    "notPortfolio",
    (pages) => {
      return [...(pages ?? [])].filter(
        (page) => !page.data?.portfolio?.isPortfolio);
    }
  ],
  [
    "latest",
    (pages) => {
      return [...(pages ?? [])].sort((a, b) => b.data?.date - a.data?.date);
    }
  ]
];
