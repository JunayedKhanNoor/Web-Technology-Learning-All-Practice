function changeBackground(){
    document.body.style.backgroundColor="gray";
}
function makeBlue(){
    document.body.style.backgroundColor="blue";
}
const blueButton = document.getElementById('blue');
blueButton.onclick = makeBlue;
//another way using anonymous function(jeitar nam nai)
const greenButton = document.getElementById('green');
greenButton.onclick=function(){
    document.body.style.backgroundColor="green";
}
//add Event Listener
// click korle oi button tar color change hobe
const goldenButton = document.getElementById("golden");
goldenButton.addEventListener('click',makeGolden);
function makeGolden() {
    goldenButton.style.backgroundColor="goldenrod";
}
//another way
const pinkButton = document.getElementById("pink");
pinkButton.addEventListener('click',function(){
    document.body.style.backgroundColor= "hotpink";
})
//another way
document.getElementById("lighBlue").addEventListener('click',function(){
    document.body.style.backgroundColor= "lightblue";
})


//====================================//

//handleJustFunctionClick()
function handleJustFunctionClick(){
    const p = document.getElementById("clicking-method");
    p.innerText = 'Set By Using Function';
}
//handleDirectFunctionClick()
document.getElementById("handleDirectFunctionClick").addEventListener('click',function(){
    const p = document.getElementById("clicking-method");
    p.innerText = 'Set By Direct Add Event Listener';
})
//Update button direct
document.getElementById('update-name').addEventListener('click',function(){
    const nameField = document.getElementById("name-input");
    const p = document.getElementById("clicking-method");
    p.innerText = nameField.value;
    nameField.value='';
})


