//p1
let name = "Junaye";
name = "Mohammad Junayed";
const age = 22;
console.log(name);
//Template String--p2
const fullName = `${name} Khan Noor`;
console.log(fullName);
//object--p2
const student = {
    name: `${fullName}`,
    age: ` ${age}`
}
console.log(student.name, student.age);
//arrow function p--3.1
const myfunction1 = x => x/5;
console.log(myfunction1(15));
//arrow function p--3.2
const myfunction2 = (x,y) =>(x+2)*(y+2);
console.log(myfunction2(2,4));
//arrow function p--3.3
const myfunction3 = (x,y,z) => x*y*z;
console.log(myfunction3(1,2,3));
//arrow function p--3.4 
const myfunction4 = (x,y) =>{
    const n1= x+2;
    const n2 = y+2;
    const multiply = n1*n2;
    return multiply;
}
console.log(myfunction4(2,4));
