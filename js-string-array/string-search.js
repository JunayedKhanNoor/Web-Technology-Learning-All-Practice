const products = [
    'Dell hardcore i29 200GB laptop',
    'iPhone 11 pro max',
    'Lenovo Yoga',
    'Lg Supernova laptop',
    'Samsung galaxy s21',
    'Dell Inspiron',
    'MacBook Pro Laptop'
]
const searcing = 'dell';
const output = [];
//using indexOf for searching
/* for (const product of products) {
    if(product.toLowerCase().indexOf(searcing.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output); */
//using includes for searching
/* for (const product of products) {
    if(product.toLowerCase().includes(searcing.toLowerCase())){
        output.push(product);
    }
}
console.log(output);  */
//startsWith() eitar kaj hoilo jei word ta khujtesi , seita string er surute ache ki na..
for (const product of products) {
    if(product.toLowerCase().startsWith(searcing.toLowerCase())){
        output.push(product);
    }
}
console.log(output);