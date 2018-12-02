function convert(temp, scale) {

    let convertedTemp = {
        fahrenheit: "",
        celcius: "",
        kevlin: "",
        orginalScale: "",
        orginalTemp: "",

    }

    convertedTemp.orginalScale = scale.toUpperCase()
    convertedTemp.orginalTemp = temp

    if (scale.toUpperCase() == "F") {
        convertedTemp.fahrenheit = temp
        convertedTemp.celcius = (temp - 32) * (5 / 9)
        convertedTemp.kevlin = (temp + 459.67) * (5 / 9)
    } else if (scale.toUpperCase() == "C") {
        convertedTemp.fahrenheit = (temp * (9 / 5)) + 32
        convertedTemp.celcius = temp
        convertedTemp.kevlin = temp + 273.15
    } else {
        convertedTemp.fahrenheit = (temp * (9 / 5)) - 459.67
        convertedTemp.celcius = temp - 273.15
        convertedTemp.kevlin = temp
    }

    return convertedTemp

}

let finalTemp = convert(50, "f")

console.log(`${finalTemp.orginalTemp}${finalTemp.orginalScale} converts to ${finalTemp.fahrenheit}F, ${finalTemp.celcius}C, and ${finalTemp.kevlin}K.`)