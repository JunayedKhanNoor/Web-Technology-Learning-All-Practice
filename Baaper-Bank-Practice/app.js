//A function for getting value of input field
function getInputValue(inputId) {
    const element = document.getElementById(inputId);
    const elementValue = Number(element.value);
    element.value = '';
    return elementValue;
}
//A function for getting value  from Deposit, Withdraw, Balance Card
function getCardValue(cardId){
    const cardElement = document.getElementById(cardId);
    const cardElementValue = Number(cardElement.innerText);
    return cardElementValue;
}
//A function for updating card Deposit, Withdraw, Balance Card
function updateCardValue(cardID,totalValue){
    const cardElementUpdate = document.getElementById(cardID);
    cardElementUpdate.innerText = totalValue;
}
//Event Listener for Deposit
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = getInputValue('deposit-input');
    const previousDeposit = getCardValue('deposit-info');
    if(depositInput>0){
        const totalDeposit = depositInput + previousDeposit;
        updateCardValue('deposit-info',totalDeposit);
        const totalBalance = getCardValue('balance-info')+depositInput;
        updateCardValue('balance-info',totalBalance);
    }else{
        alert("Please Give Valid Request")
    }
})
//Event Listener for Withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = getInputValue('withdraw-input');
    const previousWithdraw = getCardValue('withdraw-info');
    const currentBalance = getCardValue('balance-info');
    const totalWithdraw = withdrawInput + previousWithdraw;
    if(withdrawInput>0 && totalWithdraw<currentBalance){
        updateCardValue('withdraw-info',totalWithdraw);
        const totalBalance = getCardValue('balance-info')- withdrawInput;
        updateCardValue('balance-info',totalBalance);
    }else{
        alert("Please Give Valid Request")
    }
})