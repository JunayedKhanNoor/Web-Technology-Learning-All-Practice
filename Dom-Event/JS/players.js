//player class er element gular jonno style ready korsi
function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px'
    player.style.margin = '10px';
    player.style.padding = '10px';
}
//player class re style set koira disi
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}
//button a click korle player class er div create korsi
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias repellat fuga neque iure ipsa quaerat et ut praesentium repudiandae, ullam omnis debitis quasi vero deserunt aliquam, ab perspiciatis est!</p>
    `;
    //style o diya disi
    setPlayerStyle(player);
    //append o koira disi
    playersContainer.appendChild(player);
}
//click korle background color disi div gula re 
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})