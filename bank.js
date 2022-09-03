//Handling Deposit Button
document.getElementById("deposit-submit").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newdepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newdepositTotal;

    //Update Account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //Clear input field
    depositInput.value = " ";
});

//Handle Withdraw

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // Set Withdraw Total
    const withDrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withDrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withDrawTotal.innerText = newWithdrawTotal;

    //Clear WithdrawInput
    withdrawInput.value = " ";

    // Balance Total
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
});
