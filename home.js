 const validPin = 1234;
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;

        const accountNumber = document.getElementById('account-num').value;
        
        const addAmount = parseInt(document.getElementById('add-amount').value);

        const pinNumber = parseInt(document.getElementById('pin-Num').value);
        //available balance adding and changing
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        //checking if there is 11 digit
        if(accountNumber.length < 11){
            alert('Invalid account number.Please,provide valid account');
            return;
        };
        if(pinNumber !== validPin){
            alert('Please provide valid pin number');
            return;
        }
        const availableBalanceAfterAdd = availableBalance + addAmount;
        document.getElementById('available-balance').innerText = availableBalanceAfterAdd;
    })