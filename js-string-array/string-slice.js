const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const words = anthem.split(" ");
const withoutA = anthem.split("a");
//slice start index, end index
const smallSlice = anthem.slice(5,13);
//console.log(words);
//console.log(withoutA);
console.log(smallSlice);
//substr ,eita slice er moitoi kaj kore, start index, tarporerta hoilo tarpor koto ghor jabe
const anotherPart = anthem.substr(11,4);
console.log(anotherPart);
//substring start index, end index
const anotherAnotherPart = anthem.substring(0,4);
console.log(anotherAnotherPart);
const first = "Amader";
const second = "City";
//const fullString = first+second;
const fullString = first.concat(second).concat(" Dhaka");

console.log(fullString);
//join , array r sob element re ekta string banai dei
const wordsTwo = ['a','b','c','d'];
const allJoined = wordsTwo.join(", ");
console.log(allJoined);
