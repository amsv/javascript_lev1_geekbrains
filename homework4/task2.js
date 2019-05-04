// Задание 2

/*создать	объект	Basket	с	полем	goodList	и	методами	countTotalPrice,
countTotalNumber и	putProduct (методы	должны	считать	общую	стоимость	того,	
что	в	goodList, общее	количество	того,	что	в	goodList и	добавлять	товар	в	
корзину)*/
let Basket = {
	goodList: [
    {name:'Мышь', price: 150, count:2 },
    {name:'Клавиатура', price: 400, count:2 },
    {name:'Колонки', price: 600, count:1 },
    {name:'Микрофон', price: 500, count:3 }
	],
  countTotalPrice() {
		let sum = 0;
		this.goodList.forEach( ell => sum+= ell.price * ell.count )
		return sum;
  },
  countTotalNumber() {
		let val = 0;
		this.goodList.forEach( ell => val+= ell.count)
		return val;
	},
  putProduct(name, price, count) {
		this.goodList.push({name: name, price: price, count: count})	
	} 
}

/* создать	массив	товаров	с	полями	name	и	price
*/
let Goods = [
	{name: 'НазваниеТовара №1',	price: 100},
	{name: 'НазваниеТовара №2',	price: 200},
	{name: 'НазваниеТовара №3',	price: 300},
	{name: 'НазваниеТовара №4',	price: 100},
	{name: 'НазваниеТовара №5',	price: 200},
	{name: 'НазваниеТовара №6',	price: 300},
	{name: 'НазваниеТовара №7',	price: 100},
];

/*после	этого	пройтись	по	нему	в	цикле	и	положить	в	корзину	по	одному	
товару	на	четной	позиции	и	по	2	товара	на	нечетной	позиции */
Goods.forEach( (ell, index) => {
	if (index % 2 === 0) { 
		Basket.putProduct(ell.name, ell.price, 1);
	} else {	
		Basket.putProduct(ell.name, ell.price, 2);
	}
});

/*вывести	общую	стоимость	корзины	и	общее	количество	товаров	в	корзине */
console.log('Кол-во товара в корзине '+ Basket.countTotalNumber());
console.log('Сумма всех товаров в корзине '+ Basket.countTotalPrice());
console.log(Basket.goodList);
	

