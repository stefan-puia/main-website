module.exports = [["technologies", (techList, technologies) => {
  return Array.from(techList).map(
    technology => technologies.find(tech => tech.data.key === technology))
  .filter(Boolean)
  .map(tech => tech.data);
}]];
