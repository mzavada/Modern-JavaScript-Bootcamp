let myAccount = {
    name: 'Matthew Zavada',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount

}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses}.  $${account.income} in income.  $${account.expenses} in expenses.`)
}

addIncome(myAccount, 1000)
addExpense(myAccount, 10)
addExpense(myAccount, 25)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)