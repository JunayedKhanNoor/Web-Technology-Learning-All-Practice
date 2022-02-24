const number = [23,2,4,43,2,34,4]
console.log(number); 
//only upadan gula re print korbe
console.log(...number);
//math.max method  boro number ta ber kore dibe
const max  = Math.max(1,333,4);
//kintu math.max array r boro songkha ber korte pare na NaN dei
//Tai eta k ...array kore korte hoi ES6 use kore
const arrayMax  = Math.max(...number);
console.log(max);
console.log(arrayMax);
// amra jokhon koro variable declear kori, tokhon eita r jonnno memory allocate hoi
const number2 = number;
//eikhane amra push korlam number k kintu jokhon number 2 k pring kori tokhon number 2 
// sei 99 value ta k paiya jai, karon variable er memory allocation er jonno
//eitar solution number 3 tte just 'number er value gula nise
//sathe ami aage pore value o add korte partesi 11, 66,77
const number3 = [11,...number,66,77];
console.log(number3);
number.push(99);
console.log(number2);


