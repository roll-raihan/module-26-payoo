document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;

        const accountNumber = document.getElementById('account-num').value;
        
        const addAmount = parseInt(document.getElementById('add-amount').value);

        const pinNumber = document.getElementById('pin-Num').value;

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const availableBalanceAfterAdd = availableBalance + addAmount;
        document.getElementById('available-balance').innerText = availableBalanceAfterAdd;
    })