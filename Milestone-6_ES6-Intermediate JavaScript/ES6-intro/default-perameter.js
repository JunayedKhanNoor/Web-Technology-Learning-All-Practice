function add(num1, num2=0){
    /* num2=0 eita hoilo ES6 er ekta way , 
    default value decleare korar jonno,jeita kaj korbe 
    jokhon amra  num2 perametere r kono value pathabo na, 
    tokhon ei default value ta niya nibe */

    //num2 perameter ta jodi na dei tokhon seita handle korar old system
    /* if(num2 == undefined){
        num2 = 0;
    } 
    //r ekta upai
    num2 = num2 || 0;*/
    const total = num1 + num2;
    return total;
}
console.log(add(16,10));
function fullName(first, last = "Noor"){
    const name = first + " " + last;
    return name;
}
console.log(fullName("Junayed"));