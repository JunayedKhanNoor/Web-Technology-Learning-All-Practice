//Handle Deposit Button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount of deposit value 1
    const depositInput = document.getElementById("deposit-input");
    //jei taka ta akhon deposit hobe notun kore 1
    const newDepositAmount = depositInput.value;
    //console.log(depositAmount);
    const depositTotal = document.getElementById("deposit-total");
    //console.log(depositTotal.innerText);
    //jei deposit balance ache seita
    const previousDepositAmount = depositTotal.innerText;
    //notun kore tk diposit howar karone , aager diposit er tk r sathe jog kora hoise, tarpor input gula string hisebe thake oigulara Number a convert korsi
    //Parse int / parse float diyao kaj ta korte partem
    const newDepositTotal =
      Number(previousDepositAmount) + Number(newDepositAmount);
    console.log(newDepositTotal);
    //eibar total tk ta k oi Deposit board a dhukai dicchi, jeita show korbe blue card tai
    depositTotal.innerText = newDepositTotal;
    // Add the value of depositInput in depositTotal
    //depositTotal.innerText = newDepositAmount;
    //clear the input field depositInput
    depositInput.value = "";
    //Update Account Balance , total balance ta r ki jeita ache green card a ================================================
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = Number(balanceTotalText);
    //previous er sathe deposit input theke jei value paisi just seita jog koira disi
    const newBalanceTotal = previousBalanceTotal + Number(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
  });
//Handle withdrwa money
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
      // jei tk withdraw korbo seita k dhorlam
      const inputWithdtraw= document.getElementById('withdraw-input');
      const inputWithdtrawText = inputWithdtraw.value;
      const inputWithdtrawTypeCasted = Number(inputWithdtrawText);
      //withdraw card ta update korbo
      const withdrawTotal = document.getElementById('withdraw-total');
      const previousWithdrawTotalText =withdrawTotal.innerText;
      const previousWithdrawTotal = Number(previousWithdrawTotalText);
      const newWithdrawTotal = previousWithdrawTotal + inputWithdtrawTypeCasted;
      withdrawTotal.innerText= newWithdrawTotal;
      inputWithdtraw.value = '';
      //withdraw kora taka total taka theke biyog kora
    //   const newBalanceAfterWithdrwaw=  balanceTotal - inputWithdtrawTypeCasted;
    //   balanceTotal.innerText = newBalanceAfterWithdrwaw;
    //Update Account Balance , total balance ta r ki jeita ache green card a ================================================
    const balanceTotalTwo = document.getElementById("balance-total");
    const balanceTotalTwoText = balanceTotalTwo.innerText;

    const previousBalanceTotalTwo = Number(balanceTotalTwoText);
    //previous er sathe deposit input theke jei value paisi just seita jog koira disi
    const newBalanceTotalTwo = previousBalanceTotalTwo - inputWithdtrawTypeCasted;
    balanceTotalTwo.innerText = newBalanceTotalTwo;
  });
