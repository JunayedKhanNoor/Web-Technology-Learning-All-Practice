console.log("One");
console.log("Two");
console.log("Three");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
setTimeout(()=>console.log("TimeOut"),5000)  
  console.log("Three");
  console.log("Two");
  console.log("One");
for (let index = 0; index < 5; index++) {
    console.log(index);
    
}  