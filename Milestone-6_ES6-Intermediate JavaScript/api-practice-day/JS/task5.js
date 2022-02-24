const loadComment = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
};
loadComment();
const displayComment = (comments) => {
  const commentContainer = document.getElementById("comment-container");
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
        <div onclick="displayDetais('${comment.id}')">
        <p>${comment.body}</p>
        </div>
        `;
    commentContainer.appendChild(div);
  });
};
const displayDetais = (comment) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${comment}`;
  fetch(url)
  .then(res => res.json())
  .then(data =>showDetails(data)) 
};
const showDetails = item =>{
    const itemContainer = document.getElementById("comment-details");
    const div = document.createElement("div");
    div.classList.add('card');
    div.innerHTML =`
            <div class="card-body">
              <h5 class="card-title">${item.id}</h5>
              <h5 class="card-title">${item.name}</h5>
              <h5 class="card-title">${item.email}</h5>
              <p class="card-text"> ${item.body}</p>
              <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
    `
    itemContainer.appendChild(div);
}
