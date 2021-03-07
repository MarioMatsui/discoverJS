let family = {
    income: [7500, 5480], //12.980
    expenses: [ //1.620
        water = 460,
        electricity = 360,
        food = 500,
        junkFood = 300,
    ],
}

let totalIncome = family.income[0] + family.income[1];

let totalExpenses = family.expenses[0] + family.expenses[1] + family.expenses[2] + family.expenses[3];

function payAccount() {
    let balance = "positive"

    let leftOver = totalIncome - totalExpenses;

    if (totalExpenses > totalIncome) {
        balance = "negative"
        console.log(`Your balance is ${balance}. Your current balance is $${leftOver}`)
    } else {
        console.log(`Your balance is ${balance}. Your current balance is $${leftOver}`)
    }
}

payAccount()