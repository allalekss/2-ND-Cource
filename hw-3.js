//task 1
let password ='пароль';
let input = prompt('Введите пароль');
if (password===input) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно');
}
//task 2
let c = prompt('введите число');
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}
//task 3
let d = 48;
let e = 123;
if (d>100 || e>100) {
    alert('Верно')
} else {
    alert('Неверно')
}
//task 4
let a ='2';
let b ='3';
a = Number(a);
b = Number(b);
alert(a+b);
//task 5
let monthNumbe = 12;
switch (monthNumbe) {
    case 1:
    case 2:
    case 12:
        console.log('зима')
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна')
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето')
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень')
        break;       
    default:
        console.log('first')
        break;
}
