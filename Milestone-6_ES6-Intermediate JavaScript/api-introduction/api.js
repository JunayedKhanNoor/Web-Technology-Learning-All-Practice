/* 
==fetch(), kaj hoilo data load kora, ba data kono jaiga theke niyua asa
==fetch("url"), url er vitor theke data anbe
==.then, bolte bujhai tarpor ko korbe
==.then((response)=>response.json()), eitar kaj hoilo data anar por responsekora,
r hocche response korar somoy data gula k json a convert kore
==.then((parameter)=>console.log(parameter)), eitar kaj hoilo response korar por
ekta arrow function er perameter diya oi json object ta k use kora ba kichu ekta kora
*/
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then((json) => console.log(json));
}
function dataLoader() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data.title))
}
function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>  displayUsers(data))
    /* Eikhane ami  displayUsers(data) ,ekta function call kore diyeche
    perameter ta hoilo data, data hoche oi object er vitorer ekekta user er 
    sob property*/
}
function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data))
}
function displayUsers(data){
    /* ei function ta re upore call kora hoisilo, 1. amra ekta ul create korlam
     */
    const ul = document.getElementById('users');
    /* ekta loop calailam,oi data perameter er upor,
    loop diya sobgula user er property gulare itterate korlem,
    tarpor li element banailam, user er name property ta re list er vitor dhukai dilam
    list er oi style ta re remove kore dilam
    tarpor ul er vitor dhukai ndilam
     */
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}
        Email: ${user.email}`;
        li.style.listStyle = "none";
        ul.appendChild(li);
    }
}
