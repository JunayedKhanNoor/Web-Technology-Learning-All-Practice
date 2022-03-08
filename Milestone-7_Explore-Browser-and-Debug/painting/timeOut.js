function doSomething() {
  console.log("I am doing Something");
}
console.log("First");
console.log("Second");
/* set time out Asyncronous vabe kaj kore, syncronous vabe kaj kore na
set time out korle , code er onno sob operation complete kore then set time out er vitor ja ache seita execute korbe
abat time o set koira deowa jai , tahole oi time por jaiya execute hobe */
setTimeout(doSomething,5000);
//another way same kaj ii kore
/* setTimeout(function doSomething() {
    console.log("I am doing Something");
  },5000); */
//set time out er vitor arrow function likhar way
setTimeout( () =>{
    console.log("Exploring MDN Articles");
},3000)
console.log("Third");
console.log("Fourth");
