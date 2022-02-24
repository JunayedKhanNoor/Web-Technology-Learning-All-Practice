function postElement() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
postElement();

function displayPost(posts) {
  const postContainer = document.getElementById("post");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("myClass");
    div.innerHTML = `
        <h2> ${post.id}</h2>
        <h2> ${post.title}</h2>
        <p> ${post.body}</p>
        `;
    postContainer.appendChild(div);
  }
}
//Post kora , server a 
function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
