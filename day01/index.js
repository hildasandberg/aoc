const fs = require("fs")

function inputDataLinesIntegers(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => parseInt(x))
}

function getSolutionPart1() {
  const data = inputDataLinesIntegers()
  let increased = 0
  data.map((element, index) => {
    if (element > data[index - 1]) increased++
  })
  return increased
}

function getSolutionPart2() {
  const data = inputDataLinesIntegers()
  let increased = 0
  data.map((element, index) => {
    const firstWindow = element + data[index + 1] + data[index + 2]
    const secondWindow = data[index + 1] + data[index + 2] + data[index + 3]
    if (secondWindow > firstWindow) increased++
  })
  return increased
}

console.log("Javascript")
const part = process.env.part || "part1"

if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
}
