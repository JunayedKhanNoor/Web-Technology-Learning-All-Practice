// 1. using object literal
const student = { name: "Sakib AL Hasan", job: "cricketer" };
// 2. object constructor
const person = new Object();
console.log(person);
// 3. object inheritance
const human = Object.create(student);
console.log(human.name);
// 4. using class(Syntactical sugar, seita hoilo dekhte ekta, tole tole r ekta, jenom ei class kintu function er motoi kaj kore tole tole)
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People("Junayed", 22);
console.log(peop);
// 5. function (eita amra use korbo na)
function Manush(name){
    this.name = name;
}
const man = new Manush('Mahmudullah')
console.log(man)