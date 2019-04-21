// чему будет равен X ?
let a = Number(prompt('Введите первое целое число a: '));
let b = Number(prompt('Ведите второе целое чило b: '));
if (Number.isInteger(a) && Number.isInteger(b)){
    if (a >= 0 && b >= 0 ) 
        alert(`Разность чисел(a-b): ${a - b}`); 
    else if (a < 0 &&  b < 0)
        alert(`Произведение чисел: ${a * b}`); 
    else if ( (a >= 0 && b < 0) || (a < 0 && b >= 0) )
        alert(`Сумма чисел: ${a + b}`);
    else alert('Вы вели что-то не то'); 
}
else alert('Ведите целое цисло');
     
    
