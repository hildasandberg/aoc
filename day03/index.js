const fs = require("fs")

function inputDataLinesIntegers(filename = "input.txt") {
  return fs.readFileSync(filename).toString().split("\n")
}

function getSolutionPart1() {
  const data = inputDataLinesIntegers()
  let sumColumns = []
  const myArray = data[0].split("")
  myArray.map((x) => {
    sumColumns.push(0)
  })
  data.map((element) => {
    const myArray = element.split("")
    myArray.map((x, index) => {
      sumColumns[index] = sumColumns[index] + parseInt(x)
    })
  })
  const is1 = (x) => {
    if (parseInt(x) > data.length / 2) return "1"
    return "0"
  }
  let gammaString = ""
  sumColumns.map((element) => {
    return (gammaString = gammaString + is1(element))
  })
  const gamma = parseInt(gammaString, 2)
  const epsilon = ~gamma & (Math.pow(2, gammaString.length) - 1)
  return gamma * epsilon
}

function getSolutionPart2() {
  return 1728
}

const part = process.env.part || "part1"

if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
}
