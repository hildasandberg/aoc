const {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
} = require("../index")

test("part1", () => {
  const data = inputDataLinesIntegers()
  console.log(data)

  expect(getSolutionPart1()).toBe(1688)
})

test("part2", () => {
  expect(getSolutionPart2()).toBe(1728)
})
