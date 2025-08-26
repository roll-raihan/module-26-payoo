const validPin = 1234;
//create reusable function to get input value
function getInputValueNumber(id) {
    const inputFieldNumber = parseInt(document.getElementById(id).value);
    return inputFieldNumber;
}

function getInputValue(id) {
    const inputFieldNumber = document.getElementById(id).value;
    return inputFieldNumber;
}
//function to get inner text
function getInnerText(id) {
    const inputFieldNumber = parseInt(document.getElementById(id).innerText);
    return inputFieldNumber;
}
//function to set inner text
function setInnerText(value) {
    const inputFieldNumber = document.getElementById('available-balance');
    inputFieldNumber.innerText = value;
}
//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}
//add money btn feature
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        //normal process and reusable process
        // const bankName = document.getElementById('bank-name').value;
        const bankName = getInputValue('bank-name');

        const accountNumber = getInputValue('account-num');

        //normal process and reusable process
        // const addAmount = parseInt(document.getElementById('add-amount').value);
        const addAmount = getInputValueNumber('add-amount');

        const pinNumber = getInputValueNumber('pin-num-add');

        //available balance adding and changing
        const availableBalance = getInnerText('available-balance');
        //checking if there is 11 digit
        if (accountNumber.length < 11) {
            alert('Invalid account number.Please,provide valid account');
            return;
        };
        if (pinNumber !== validPin) {
            alert('Please provide valid pin number');
            return;
        }
        const availableBalanceAfterAdd = availableBalance + addAmount;
        setInnerText(availableBalanceAfterAdd);
    })
//cash out btn feature
document.getElementById("cash-out-btn").addEventListener('click', function (e) {
    e.preventDefault();
    //input agent number and check validation
    //same as add money.reusable function
    const agentNumber = getInputValue('agent-number');
    if (agentNumber.length < 11) {
        alert("Agent number invalid.Please, provide valid number");
        return;
    }
    //same as add money.reusable function
    const cashOutAmount = getInputValueNumber('cash-out-amount');

    const pinNumber = getInputValueNumber('pin-num-cash');

    if (pinNumber !== validPin) {
        alert('Please provide valid pin number');
        return;
    }

    //available balance adding and changing
    const availableBalance = getInnerText('available-balance');
    const availableBalanceAfterCashout = availableBalance - cashOutAmount;
    setInnerText(availableBalanceAfterCashout);
})

//transfer money button feature
document.getElementById('transfer-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const userAccount = getInputValue('user-number');
    if (userAccount.length < 11) {
        alert('Provide valid user number');
        return;
    }
    const transferAmount = getInputValueNumber('transfer-amount');
    const pinNumber = getInputValueNumber('pin-num-transfer');
    if(pinNumber !== validPin){
        alert('Give valid pin');
        return;
    }
    const availableBalance = getInnerText('available-balance');
    const availableBalanceAfterTransfer = availableBalance - transferAmount;
    setInnerText(availableBalanceAfterTransfer);
})

//toggling feature start(add money, cash out, transfer)
//add-money
document.getElementById('add-money-button').addEventListener("click", function () {
    //without using function.....    
    //add money clicked = others vanish
    // 1.document.getElementById('cash-out-parent').style.display = 'none';
    // 2.document.getElementById("transfer-money-parent").style.display = 'none';
    //click again, it will come.If u don't add this,it will vanish after one click and won't come
    // 1.document.getElementById('add-money-parent').style.display = 'block';

    handleToggle('add-money-parent');
})
//cash-out
document.getElementById('cash-out-button').addEventListener("click", function () {

    handleToggle('cash-out-parent');
})
//transfer
document.getElementById("transfer-money-button").addEventListener('click', function () {

    handleToggle('transfer-money-parent');
})
