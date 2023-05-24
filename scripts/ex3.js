//Дан масив об'єктів. Вивести масив телефонних номерів 
//користувачів, у яких баланс більше 2000 доларів.І знайти суму всіх балансів користувачів

let users = [{
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },

    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

let phones1 = [];
let generalAmount1 = 0;

//Вариант-1
for (let i = 0; i < users.length; i++) {
    let user = users[i].phone;
    // console.log(user);
    let amount = users[i].balance;
    // console.log(amount);
    let deleteSymbol = amount.replace(/[$,]/g, '');
    // console.log(deleteSymbol);
    let swap = parseFloat(deleteSymbol);
    // console.log(deleteSymbol);
    generalAmount1 += swap;
}
console.log("Вариант-1:" + generalAmount1.toFixed(2));

//Вариант-2
let phones2 = [];
let generalAmount2 = 0;
for (let i = 0; i < users.length; i++) {
    phones2.push(users[i].phone);
    if (parseFloat(users[i].balance.replace(/[$,]/g, '')) >= 2000)
        generalAmount2 += parseFloat(users[i].balance.replace(/[$,]/g, ''));

}
console.log("Вариант-2:" + generalAmount2.toFixed(2));

//Вариант-3
let phones3 = [];
let generalAmount3 = 0;
users.forEach(el => {
    phones3.push(el.phone);
    if (parseFloat(el.balance.replace(/[$,]/g, '')) >= 2000)
        generalAmount3 += parseFloat(el.balance.replace(/[$,]/g, ''));
})
console.log("Вариант-3:" + generalAmount3.toFixed(2));
// console.log(phones3.join(", "));