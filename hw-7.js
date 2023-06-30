//task 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//task 2
const lines = ['репа', 'Редис', 'сельдерей', 'Петрушка']
const search = 'ре';
lines.forEach(line => {
    if(line.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(line)
    }
});

//task 3
let num = Number(32.58884);
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//task 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//task 5
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1, 10));

//task 6
let ent = Number(prompt('Введите число'));
function getRandomArrNumbers(length = Math.floor(ent/2)) {
  return Array.from(Array(length),() => Math.floor(Math.random()* ent)+1);
}
let random = getRandomArrNumbers();
console.log(random);

//task 7
let min = Number(prompt('Введите первое целое число'));
let max = Number(prompt('Введи второе целое число'));
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(min,max));

//task 8
let currentDate = new Date();
console.log(currentDate);

//task 9
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//task 10
function data() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    let myDate = new Date(); 
    let fullDate = "Сегодня: " + myDate.getDate() + 
    " " + months[myDate.getMonth()] + 
    " " + myDate.getFullYear() + 
    ", " + days[myDate.getDay()]; 
    let hour = myDate.getHours(); 
    let minute = myDate.getMinutes(); 
    let second = myDate.getSeconds(); 
    console.log(fullDate);
    console.log(hour + ":" + minute + ":" + second);
}
data();