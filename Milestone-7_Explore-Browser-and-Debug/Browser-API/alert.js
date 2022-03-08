const ammaComing = () => {
  alert("Amm asitese");
};
const askPicnic = () => {
    const response = confirm('Are You Going to picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake fee ta bkash kor')
    }else{
        alert('Dhur hala')
    }
}
const askName = () =>{
    const name = prompt('Give your Name')
    if (name) {
        console.log(name); 
    }
    
}
