//JavaScript Object
const user = {id: 11, name: 'Gorib Amir',job: 'actor'}
//JSON
//JS Object k string format kora hoi JSON.stringify() diya
const stringified = JSON.stringify(user);
console.log(user); 
console.log(stringified);

const shop = {
    name: 'Alia Shop',
    address: 'Ronbir Road',
    profit: 15000,
    product: ['laptop','mobile','pepsi'],
    ieExpensive: false
}
//JS Object k string format kora hoi JSON.stringify() diya
const shopStringfied = JSON.stringify(shop);
console.log(shop);
console.log(shopStringfied);
/* JS Object k string format korar por seta k use korte 
gele abar convert kore orginal format  a niya jaite  hoi JSON.parse() diya */
const converted = JSON.parse(shopStringfied);
console.log(converted);