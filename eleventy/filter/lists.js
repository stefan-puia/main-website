module.exports = [
  [
    "splitNewLine",
    (string) => string.split("\n").map(s => s.trim()),
  ],
]