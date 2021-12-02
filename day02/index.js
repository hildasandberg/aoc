const fs = require("fs")
const inputDataLines = (filename = "input.txt") => {
  return fs.readFileSync(filename).toString().trim().split("\n")
}
const getSolutionPart1 = () => {
  const position = { h: 0, d: 0 }
  inputDataLines().map((e) => {
    if (e.trim().split(" ")[0] == "down") {
      position.d = position.d + parseInt(e.trim().split(" ")[1])
    } else if (e.trim().split(" ")[0] == "up") {
      position.d = position.d - parseInt(e.trim().split(" ")[1])
    } else position.h = position.h + parseInt(e.trim().split(" ")[1])
  })
  return position.h * position.d
}
const getSolutionPart2 = () => {
  const pos = { h: 0, d: 0, a: 0 }
  inputDataLines().map((element) => {
    if (element.trim().split(" ")[0] == "forward") {
      pos.h = pos.h + parseInt(element.trim().split(" ")[1])
      pos.d = pos.d + pos.a * parseInt(element.trim().split(" ")[1])
    } else if (element.trim().split(" ")[0] == "down") {
      pos.a = pos.a + parseInt(element.trim().split(" ")[1])
    } else pos.a = pos.a - parseInt(element.trim().split(" ")[1])
  })
  return pos.h * pos.d
}
console.log("Javascript")
const part = process.env.part || "part1"
if (part === "part1") console.log(getSolutionPart1())
else console.log(getSolutionPart2())
module.exports = {
  getSolutionPart1,
  getSolutionPart2,
}
