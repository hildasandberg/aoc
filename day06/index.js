const fs = require("fs")

function inputDataLinesIntegers(filename = "input.txt") {
  return fs.readFileSync(filename).toString().split(",").map(Number).sort()
}

const data = inputDataLinesIntegers()

const constructDay0 = () => {
  let day = []
  for (let step = 0; step <= 8; step++) {
    day.push(data.filter((x) => x == step).length)
  }
  return day
}

const day = constructDay0()

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
  const dayA = [...day]
  return calculate(80, dayA)
}

const getSolutionPart2 = () => {
  const dayB = [...day]
  return calculate(256, dayB)
}

const part = process.env.part || "part1"

if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
}
