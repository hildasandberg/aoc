const {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
} = require("../index")

test("part1", () => {
  expect(getSolutionPart1()).toBe(3895776)
})

test("part2", () => {
  expect(getSolutionPart2()).toBe(7928162)
})
