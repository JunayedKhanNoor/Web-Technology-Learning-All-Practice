const number = [3,2,4,5,6,6,7,4,23,34,5,6,6,7];
//slice mul arra k change kore na 
const numberSlice = number.slice(4,8);
//console.log(numberSlice);
//Splice mul array k change kore , oi element ta remove kore array theke
const numberSpliced = number.splice(4,3);
//console.log(numberSpliced);
console.log(number);
//Eikhane Splice diye amra ja korsi seita hoilo  array r 4 number porition a delete korsi(0), mani kono delete kori nai, caile korte partam. kinto 4 number er por 2 ta element add korsi, etai interesting
const numberSplicedTwo =  number.splice(4,0,"Node JS","Mongo DB");
console.log(number);