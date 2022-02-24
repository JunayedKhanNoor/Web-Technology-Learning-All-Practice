function addNumbers(num1,num2) {
    let result = 0;
    for (const argument of arguments) {
        result = result +argument;
    }
    
    return result;
}
const sum = addNumbers(23,1,12,24);
console.log(sum);