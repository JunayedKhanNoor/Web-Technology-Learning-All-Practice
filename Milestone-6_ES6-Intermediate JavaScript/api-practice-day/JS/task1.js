const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res =>res.json())
    .then(data => displayData(data))
} 

const displayData = alldata =>{
    const emaiList = document.getElementById('email-list');
    const idList = document.getElementById('id-list');
    const nameList = document.getElementById('name-list');
    alldata.forEach(comment => {
        //console.log(comment.email);
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        li.innerText =`Email: ${comment.email}`
        li2.innerText =`ID: ${comment.id}`
        li3.innerText =`Name: ${comment.name}`
        li.style.listStyle = 'none';
        li2.style.listStyle = 'none';
        li3.style.listStyle = 'none';
        idList.appendChild(li2);
        nameList.appendChild(li3);
        emaiList.appendChild(li);
    });
}