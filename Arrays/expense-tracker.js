const account = {
    name: "Matthew Zavada",
    expenses: [],
    income: [],
    addExpense: function (desc, amt) {

        this.expenses.push({
            description: desc,
            amount: amt
        })
    },
    addIncome: function (desc, amt) {
        this.income.push({
            description: desc,
            amount: amt
        })
    },
    getAccountSummary: function () {
        let totalExp = 0
        let totalInc = 0

        this.expenses.forEach(expense => totalExp += expense.amount)
        this.income.forEach(income => totalInc += income.amount)


        return `${this.name} has a balance of $${totalInc - totalExp}.  $${totalInc} in income.  $${totalExp} in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Work', 1500)
account.addIncome('Odd Job', 25)



console.log(account.getAccountSummary())

// console.table(account.expenses)