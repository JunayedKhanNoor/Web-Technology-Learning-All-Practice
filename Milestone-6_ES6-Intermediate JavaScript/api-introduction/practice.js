function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => getPost(data))
}
function getPost(data) {
    const ul = document.getElementById("post")
    for (const post of data) {
        const li = document.createElement('li');
        li.innerText = `User ID: ${post.id}`;
        li.style.listStyle = 'none';
        ul.appendChild(li);
    }
}