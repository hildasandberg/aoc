const fs = require("fs")

function inputDataLinesIntegers(filename = "input.txt") {
  return fs.readFileSync(filename).toString().split("\n")
}

const data = inputDataLinesIntegers()

const createGammaString = (inData) => {
  let sumColumns = []
  const myArray = data[0].split("")
  myArray.forEach(() => {
    sumColumns.push(0)
  })
  inData.map((element) => {
    const myArray = element.split("")
    myArray.map((x, index) => {
      sumColumns[index] = sumColumns[index] + parseInt(x)
    })
  })
  const is1 = (x) => {
    if (parseInt(x) >= inData.length / 2) return "1"
    return "0"
  }
  let gammaString = ""
  sumColumns.map((element) => {
    return (gammaString = gammaString + is1(element))
  })

  return gammaString
}

const createGammaStringInverted = (inData) => {
  let sumColumns = []
  const myArray = inData[0].split("")
  myArray.forEach(() => {
    sumColumns.push(0)
  })
  inData.map((element) => {
    const myArray = element.split("")
    myArray.map((x, index) => {
      sumColumns[index] = sumColumns[index] + parseInt(x)
    })
  })
  let gammaString = ""
  const is1inverted = (x) => {
    if (parseInt(x) >= inData.length / 2) return "0"
    return "1"
  }
  sumColumns.map((element) => {
    return (gammaString = gammaString + is1inverted(element))
  })

  return gammaString
}

function getSolutionPart1() {
  const gammaString = createGammaString(data)
  const gamma = parseInt(gammaString, 2)
  const epsilon = ~gamma & (Math.pow(2, gammaString.length) - 1)
  return gamma * epsilon
}

// Part 2
const calculateOxygen = () => {
  let oxygenData = [...data]
  let bitIndex = 0
  while (oxygenData.length > 1) {
    gammaString = createGammaString(oxygenData)
    bitIndex >= 12 ? (bitIndex = 0) : bitIndex
    let result = oxygenData.filter((item, index) => {
      const row = item.split("")
      return row[bitIndex] == gammaString[bitIndex]
    })
    oxygenData = result
    bitIndex++
  }
  gammaString = createGammaString(oxygenData)
  return (oxygen = parseInt(gammaString, 2))
}

const calculateCo2 = () => {
  let co2Data = [...data]
  bitIndex = 0
  while (co2Data.length > 1) {
    gammaString = createGammaStringInverted(co2Data)
    bitIndex >= 12 ? (bitIndex = 0) : bitIndex
    let result = co2Data.filter((item) => {
      const row = item.split("")
      return row[bitIndex] == gammaString[bitIndex]
    })
    co2Data = result
    bitIndex++
  }
  gammaString = createGammaString(co2Data)
  return (co2scrubber = parseInt(gammaString, 2))
}
function getSolutionPart2() {
  const oxygen = calculateOxygen()
  const co2scrubber = calculateCo2()
  const lifeSupportRating = oxygen * co2scrubber

  return lifeSupportRating
}

const part = process.env.part || "part1"

if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
}
