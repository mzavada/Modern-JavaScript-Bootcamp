let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

let makeGuess = num => num === Math.floor(Math.random() * (5 - 1 + 1)) + 1

console.log(makeGuess(4))