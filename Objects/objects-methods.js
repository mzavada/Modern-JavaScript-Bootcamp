let restaurant = {
    name: "Twisted Pizza",
    guestCapacity: 75,
    guestCount: 0,
    availableSeats: function () {
        return this.guestCapacity - this.guestCount
    },
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount = partySize + this.guestCount
            console.log(`Party of ${partySize} was seated.`)
        } else {
            return console.log(`Cannot seat party of ${partySize} as no seats are left.`)
        }
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
        console.log(`Party of ${partySize} left the resturant.`)
    }
}

restaurant.seatParty(5)
console.log(restaurant.availableSeats())
restaurant.removeParty(4)
console.log(restaurant.availableSeats())
restaurant.seatParty(76)