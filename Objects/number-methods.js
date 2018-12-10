const min = 10;

const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


const makeGuess = num => num === Math.floor(Math.random() * (5 - 1 + 1)) + 1;
console.log(makeGuess(4));
