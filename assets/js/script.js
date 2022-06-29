var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var clickError = document.getElementById('click-error');

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}
function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    if (email == 'abhijithas2213@gmail.com') {
        emailError.innerHTML = 'Cant use this mail id';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
function validatePhone() {

    var phone = document.getElementById('phone').value;
    console.log('phone');

    if (phone.length != 10) {
        phoneError.innerHTML = 'phone should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}
function validateMessage() {
    var message = document.getElementById('message').value;
    var required = 20;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '';
    return true;
}
function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        clickError.style.display = 'block'
        clickError.innerHTML = 'please complete form to submit';
        setTimeout(function () { clickError.style.display = 'none'; }, 3000);
        return false;
    }
}
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzzjLQ_bw2rLnRV6raTmo1oN1O3xoGO4YQEUpI6MxfK8965Y_26/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
        },
        error: function (err) {
            alert("Something Error")
        }
    })
})


