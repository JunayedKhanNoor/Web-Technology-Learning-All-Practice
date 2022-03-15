const products = [
    {name:'X1 Carbon', price: 150000, brand: 'Lenovo', color: 'Black'},
    {name:'iPhone 14', price: 150000, brand: 'iPhone', color: 'Black'},
    {name:'Mavic Pro', price: 190000, brand: 'DJI', color: 'Black'},
    {name:'XPS', price: 130000, brand: 'Dell', color: 'White'},
    {name:'Evalon', price: 125000, brand: 'HP', color: 'Silver'},
    {name:'phone', price: 125000, brand: 'HP', color: 'Silver'},
]
const brand = products.map(product=>product.brand);
const prices = products.map(product=>product.price);
console.log(brand);
console.log(prices);
products.forEach(product=>console.log(product.color));
const overPriced = products.filter(product=>product.price>130000);
console.log(overPriced);
const specialName = products.filter(product=> product.name.includes('n'));
console.log(specialName);
const specialName2 = products.find(product=> product.name.includes('n'));
console.log(specialName2);

const newProduct = [{name:'Mac Mini', price: 400000, brand: 'Apple', color: 'Silver'}]

const masterProduct = [...products,newProduct];
console.log(masterProduct);

const remaining = products.filter(p=>p.name!=='phone');
console.log(remaining);


