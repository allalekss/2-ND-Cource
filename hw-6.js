//task 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
	if (numbs[i] == 10) break;
}

//task 2
console.log(numbs.indexOf(4));

//task 3
const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(' '));

//task 4
 let arr = [];
 for (let i = 0; i < 3; i++) {
   arr[i] = [];
   for (let j = 0; j < 3; j++) {
     arr[i].push(1);
   }
 }
 console.log(arr)


//task 5
const number = [1, 1, 1];
number.push(2,2,2);
console.log(number);

//task 6
let num = [9, 8, 7, 'a', 6, 5];
num = num.sort();
num.pop();
console.log(num);

//task 7
const checkNumeric =[9, 8, 7, 6, 5];
const numeric = Number(prompt('Введите число'));
if (checkNumeric.includes(numeric)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//task 8
const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);

//task 9
const numbeRs = [[1, 2, 3],[4, 5, 6]];
console.log(numbeRs.join(','));

//task 10
const random = [3, 5, 9, 1];
for (let i = 0; i < random.length - 1; i++) {
    let sum = random[i] + (random[i + 1]);
    console.log(sum);
  }

//task 11
const integer = [2, 6, 12, 43, 9];
let result = integer.map(item=> (item**2));
console.log(result);

//task 12

function lengthSrt(arr) {
    return arr.map(el => {
     console.log(el.length);
    });
}
lengthSrt(['сыр', '', 'на', 'Мы вчера ходили в зоопарк', 'и']);


//task 13
function filterPositive(array) {
    return console.log(array.filter(el => el < 0))
  }
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]); 
