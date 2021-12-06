const {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
} = require("../index")

test("part1", () => {
  expect(getSolutionPart1()).toBe(379414)
})

test("part2", () => {
  expect(getSolutionPart2()).toBe(1705008653296)
})
