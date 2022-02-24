//single parameter , arrow function
const fiveTimes = num => num*5;
console.log(fiveTimes(5));
//jodi kono perameter na thake 
const getName = () => 'Junayed';
console.log(getName());
// Arrow function er vitor jodi multi Line code thake , tokhon return kora lage 
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
console.log(doMath(7,6));

