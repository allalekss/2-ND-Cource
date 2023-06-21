//task 1
let a = Number(prompt('Введите одно число'));
let b = Number(prompt('Введите второе число'));
function numb(a,b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    }
    else if (a === b) {
        return console.log(a || b);
    }
}
console.log(a, b);

//task 2
let s = Number(prompt('Введите одно число'));
function numb(s) {
    if (s % 2 == 0) {
        return console.log('Четное число');
    } else if (s > 0 || s < 0) {
        return console.log('Нечетное число');
    }
    else if (isNaN(s)) {
        console.log(`Вы ввели что то не то`);
    }
}
console.log(numb(s));

//task 3.1
let x = Number(prompt(`Введите пожалуйста число`));
function squareOfNumber(x) {
    let square = x * x;
    return square;
    }
console.log(squareOfNumber(x));

//задача 3.2
let d = Number(prompt('Введи пожалуйста число'));
function square2(d) {
    return d * d;
    }

//задача 4
let age = Number(prompt('Введите Ваш возраст'));
function yourAge(age) {
    if (age < 0) {console.log('Вы ввели неправильное значение');} 
    else if (age >= 0 && age <= 12) {console.log(`Привет, друг!`);}
    else if (age >= 13) {console.log('Добро пожаловать!');}
}
yourAge(age);

//задача 5
let q = Number(prompt('Введите число'));
let i = Number(prompt('Введите число'));
function secondNumbers(q, i) {
    if (isNaN(q) === false && isNaN(i) === false) {
        return q * i;
    } else if (isNaN(q) === true || isNaN(i) === true) {
        return console.log('Одно или оба значения не являются числом');
    }
}
console.log(secondNumbers(q, i));

//задача 6
let j = Number(prompt('Введите число'));
function chekoutNumber(j) {
    if (isNaN(j) === false) {
        return j ** 3;
    } else if (isNaN(j) === true) {
        console.log('Переданный параметр не является числом');
    }
}
console.log(`${j} в кубе равняется`, `${chekoutNumber(j)}`);

//задача 7
let r1 = Number(prompt(`Введите радиус первой окружности`));
let r2 = Number(prompt(`Введите радиус второй окружности`));

function takeA() {
    return (Math.PI * this.radius ** 2);
  }
function takeS() {
    return (2 * Math.PI * this.radius );
  }
const circle1 = {
    radius: r1,
    length: takeA,
    area: takeS,
    };

const circle2 = {
    radius: r2,
    length: takeA,
    area: takeS,
    };

console.log(circle1.length());
console.log(circle1.area());
console.log(circle2.length());
console.log(circle2.area());

console.log(`При значении радиуса окружности ${r1}, длина ее составит - , ${circle1.length()},, а площадь - ${circle1.area()}.`);
console.log(`При значении радиуса окружности ${r2}, длина ее составит - , ${circle2.length()},, а площадь - ${circle2.area()}.`);

//задание 8 к сайту
function gameOne() {
    let mN = Number(prompt(`Введите пожалуйста номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return alert(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return alert('Это весна');}
    else if (mN >= 6 && mN <= 8 ) {return alert('Это лето');}
    else if (mN >= 9 && mN <= 11 ) {return alert('Это осень');}
    else if (isNaN(mN) === true ) {return alert('Вы что то попутали, такого нет!)');}   
}