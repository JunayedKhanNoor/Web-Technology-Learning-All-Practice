//map p--5
const myArray = [2,3,4,1,32,5,67,7,3,2,4,5,9];
const mapedArray = myArray.map(x=>x*5);
console.log(mapedArray);
//filter p--6
const oddNumber = myArray.filter(x=>x%2);
console.log(oddNumber);
const evenNumber = myArray.filter(x=>x%2===0);
console.log(evenNumber);
//find p--7
const products = [
    {name: "iPhoneX", price: 40000, color: "Silver"},
    {name: "Xiaomi Note 3", price: 5000, color:"Silver"},
    {name: "Samsung Galaxy S21", price: 70000}
]
const phone = products.find(product=>product.price == 5000)
console.log(phone);