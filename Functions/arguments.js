let name = 'Matt'

console.log(`Hello ${name}`)


let getTip = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on a $${total} bill would be $${total*tipPercent}`
}

console.log(getTip(100, .15))