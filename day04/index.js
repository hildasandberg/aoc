const fs = require("fs")

function inputDataLinesIntegers(filename = "input.txt") {
  return fs.readFileSync(filename).toString().split(",").map(Number).sort()
}

const data = inputDataLinesIntegers()

const constructDay = () => {
  const zeros = data.filter((x) => x == 0)
  const ones = data.filter((x) => x == 1)
  const twos = data.filter((x) => x == 2)
  const threes = data.filter((x) => x == 3)
  const fours = data.filter((x) => x == 4)
  const fives = data.filter((x) => x == 5)
  const sixs = data.filter((x) => x == 6)
  const sevens = data.filter((x) => x == 7)
  const eights = data.filter((x) => x == 8)

  return [
    zeros.length,
    ones.length,
    twos.length,
    threes.length,
    fours.length,
    fives.length,
    sixs.length,
    sevens.length,
    eights.length,
  ]
}

const calculate = (days, day) => {
  for (let step = 1; step <= days; step++) {
    const bornToday = day.shift()
    day[8] = bornToday
    day[6] = day[6] + bornToday
  }
  return day.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )
}

const getSolutionPart1 = () => {
  const day = constructDay()
  return calculate(80, day)
}

const getSolutionPart2 = () => {
  const day = constructDay()
  return calculate(256, day)
}

const part = process.env.part || "part1"

if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
}
