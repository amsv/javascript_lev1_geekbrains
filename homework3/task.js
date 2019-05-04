// Задание 1
console.log("Задание 1");
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
   ];

let b = JSON.parse(JSON.stringify(a))

// Задание 2
// price - цена за ед. товара, amount - кол-во товаров
console.log("Задание 2");
let goods = [{name:'Мышь',price: 150 , amount:2},
            {name:'Клавиатура',price: 400 , amount:2},
            {name:'Колонки',price: 600 , amount:1},
            {name:'Микрофон',price: 500 , amount:3}];

function countBasketPrice(x) {
   let sum = 0;
   for (let i = 0; i < x.length; i++) {
            sum+=x[i].price*x[i].amount;
   }
   return sum;
}
console.log(countBasketPrice(goods));

// Задание 3
console.log("Задание 3");
for (let i = 0; i <= 9 ;console.log(i++)) {
}

// Задание 4
console.log("Задание 4");
let star="";
for (let i = 1; i <= 20 ;i++) {
   console.log(star+="*");
}


