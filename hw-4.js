//task 1
let a = 1;
let b = 2;
while (a<=b) {
    console.log('Привет');
    a++  
}
//task 2
let i = 1;
do {
    console.log(i);
    i++;
} while (i<6);
//task 3
let d = 7;
while (d<=22) {
    console.log(d);
    d++
}
//task 4
let obj = {'Коля':200,'Вася':300,'Петя':400};
for (key in obj) {
    if (obj, key) {
     console.log(`${key} - зарплата ${obj[key]}`);  
        
    }
}
//task 5
let n = 1000
let num = 0
while (n>50) {
    n/=2;
    num++;
}
console.log(n);
console.log(num);
//task 6
for (let friday=2; friday<=31;friday+=7) {
    console.log(`Сегодня пятница,${friday}-е число. Необходимо подготовить отчет.`);
    friday+=7
}