function gameOne() {
    let mN = Number(prompt(`Введите пожалуйста номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return alert(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return alert('Это весна');}
    else if (mN >= 6 && mN <= 8 ) {return alert('Это лето');}
    else if (mN >= 9 && mN <= 11 ) {return alert('Это осень');}
    else if (mN >=13 || mN <=0 ) {return alert('Вы что то попутали, такого нет!)');}   
}