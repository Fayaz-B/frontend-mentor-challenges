const form = document.getElementById("form");
const email = form['email'];
const small = form.querySelector('small');

form.addEventListener("submit", e => {
    e.preventDefault();
    emailValue = email.value;
    if(!emailValue){
        showError('Email field cannot be blank');

    } else if(!validateEmail(emailValue)){
        showError('Please prove a valid email address');
    } else{
        small.innerText = '';
        small.classList.remove('email-error');
        email.classList.remove('input-error');
    }

});

function showError(errorText) {
    small.innerText = errorText;
    small.classList.add('email-error');
    email.classList.add('input-error');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}