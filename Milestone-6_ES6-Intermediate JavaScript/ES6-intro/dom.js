document.getElementById("add-border").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  container.style.border = "3px solid yellow";
  container.style.padding = "20px";
});
function addBackgroundColor() {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "lightblue";
  }
}
document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDive = document.createElement("div");
  friendDive.classList.add("friend");
  friendDive.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    `;
    container.appendChild(friendDive);
});
