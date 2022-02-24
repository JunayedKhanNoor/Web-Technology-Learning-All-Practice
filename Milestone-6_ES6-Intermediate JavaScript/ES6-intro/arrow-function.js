//function declaration
function add(num1, num2){
    return num1+ num2;
}
//function expression
const  add2 = function ad(num1,num2){
    return num1+ num2;
}
//function expression (anonymous)
const  add3 = function (num1,num2){
    return num1+ num2;
}
console.log(add(2,5));
console.log(add2(2,5));
console.log(add3(2,5));

//arrow function
const add4 = (num1,num2) => num1 + num2;
console.log(add4(2,7));