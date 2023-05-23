const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//Знайти суму та кількість позитивних елементів.
let counterOfPositive = 0;
let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        counterOfPositive++;
        sum += array[i]
    }
}
console.log("Количество позитивных чисел: " + counterOfPositive);
console.log("Сумма позитивных чисел: " + sum);

//Знайти мінімальний елемент масиву та його порядковий номер
const minimal = Math.min(...array);
console.log("наименьшее число: " + minimal);
console.log("Индекс наименьшего числа: " + array.indexOf(minimal));

//Знайти максимальний елемент масиву та його порядковий номер
const max = Math.max(...array);
console.log("наибольшее число: " + max);
console.log("Индекс наибольшего числа: " + array.indexOf(max));

//Визначити кількість негативних елементів
let counterOfNegative = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        counterOfNegative++;
    }
}
console.log("Количество негативных чисел: " + counterOfNegative);

//Знайти кількість непарних позитивних елементів
let quantityOfUnpairedPositive = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        quantityOfUnpairedPositive++;
    }
}
console.log("Количество непарных позитивных чисел: " + quantityOfUnpairedPositive);

//Знайти кількість парних позитивних елементів
let quantityOfPairedPositive = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
        quantityOfPairedPositive++;
    }
}
console.log("Количество парных позитивных чисел: " + quantityOfPairedPositive);

//Знайти суму парних позитивних елементів
let sum2 = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        sum2 += array[i];
    }
}
console.log("Cумма парных позитивных элементов: " + sum2);

//Знайти суму непарних позитивних елементів
let sum3 = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        sum3 += array[i];
    }
}
console.log("Cумма непарных позитивных элементов: " + sum3);

//Знайти добуток позитивних елементів
let dobutok = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
        dobutok *= array[i];
    }
}
console.log("Умножение позитивных элементов: " + dobutok);

//Знайти найбільший серед елементів масиву, остальні обнулити
const maxElement = Math.max(...array);
for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxElement) {
        array[i] = 0;
    }
}
console.log("Обнулятор чисел, остаток наибольшее число: " + array)