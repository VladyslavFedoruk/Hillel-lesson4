//Створити масив, довжину та елементи якого задає користувач
const user = prompt("Вкажіть кількість елементів для массиву");
const numbers = [];
for (let i = 0; i < user; i++) {
    numbers.push(Number(prompt(`Вкажіть число № ${i}`)))
}
console.log(numbers);

//Відсортувати масив за зростанням.
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let swap = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = swap;
        }
        // console.log(numbers[j], numbers[j + 1], numbers[j] > numbers[j + 1])
    }
}
console.log(numbers);

//Видалити елементи з масиву з 2 по 4 (включно!)
numbers.splice(1, 4);
console.log(numbers)

//У міру змін виводити вміст масиву на сторінку
let div = document.querySelector('.table');
div.append(numbers.join(", "));