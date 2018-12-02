let convertFahrenheitToCelcius = function (degrees) {
    return (degrees - 32) * 5 / 9
}

console.log(convertFahrenheitToCelcius(32))
console.log(convertFahrenheitToCelcius(68))

let calTip = function (bill, tip = .2) {
    return bill * tip
}

console.log(calTip(25, .15))
console.log(calTip(30))
console.log(calTip(undefined, .14))