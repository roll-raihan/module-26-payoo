//login button functionality
document.getElementById('login-btn').addEventListener('click', function (e) {
    //usually btn in form,works as a submit function
    //to prevent from reloading automatically we use e.preventDefault
    e.preventDefault();
    const mobileNum = 18251502030;
    const pinNum = 1234;
    //to get the value
    const mblNumValue = document.getElementById('mbl-num').value;
    //convert to int(not mandatory)
    const mblNumValueConvert = parseInt(mblNumValue);

    const pinNumValue = document.getElementById('pin-num').value;
    const pinNumValueConvert = parseInt(pinNumValue);

    if(mblNumValueConvert === mobileNum && pinNumValueConvert === pinNum){
       // to travel another html page
       window.location.href="./home1.html"
    }else{
        alert('Invalid information');
    }
})