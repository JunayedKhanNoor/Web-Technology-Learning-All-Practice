 function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const amountValue = Number(inputField.value);
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const previousTotal = Number(totalElement.innerText);
  totalElement.innerText = amount + previousTotal;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = Number(balanceTotal.innerText);
  return previousBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
  const previousBalanceTotal = getCurrentBalance();
  const balanceTotal = document.getElementById("balance-total");
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      //update Balance
      updateBalance(depositAmount, true);
    } else {
      alert("Please Enter Valid Input");
    }
  });
//Handle Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      //update withdraw total
      updateTotalField("withdraw-total", withdrawAmount);
      //update balance after withdraw
      updateBalance(withdrawAmount, false);
    } else {
      alert("Please Enter Valid Input");
    }
  });
