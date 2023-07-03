// Первая игра
function gameOne() {
    let mN = Number(prompt(`Введите пожалуйста номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return alert(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return alert('Это весна');}
    else if (mN >= 6 && mN <= 8 ) {return alert('Это лето');}
    else if (mN >= 9 && mN <= 11 ) {return alert('Это осень');}
    else if (mN >=13 || mN <=0 ) {return alert('Вы что то попутали, такого нет!)');}   
}

// Вторая игра
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']

function gameTwo () {
    const newFruits = fruits.sort(() => Math.random() - 0.5);
    alert(newFruits);
    let oneFruits = prompt('Чему равнялся первый элемент массива?');
    let twoFruits = prompt('Чему равнялся последний элемент массива?');
    if (newFruits[0].toLowerCase() === oneFruits.toLowerCase() && newFruits[newFruits.length-1].toLowerCase() === twoFruits.toLowerCase()) {
        alert(' Поздравляю!Ты угадал все фрукты!')
    } else if(newFruits[0].toLowerCase() === oneFruits.toLowerCase() || newFruits[newFruits.length-1].toLowerCase() === twoFruits.toLowerCase()) {
        alert('Ты был близок к победе!')
    } else {
        alert('Ты не угадал ни одного фрукта')
    }
}
