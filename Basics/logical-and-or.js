let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer a little of both')
} else {
    console.log('Have whatever you want')
}