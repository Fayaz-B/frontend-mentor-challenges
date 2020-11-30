const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const first = form['firstname'].value;
    const last = form['lastname'].value;
    const email = form['email'].value;
    const pass = form['password'].value;

    if(!first){
        addErrors('firstname');
    }else{
        removeErrors('firstname');
    }

    if(!last){
        addErrors('lastname');
    }else{
        removeErrors('lastname');
    }

    if(!email){
        addErrors('email');
    }else if(!validateEmail(email)){
        addErrors('email', 'Looks like this is not an email')
    }else{
        removeErrors('email');
    }

    if(!pass){
        addErrors('password');
    }else{
        removeErrors('password');
    }
});

function addErrors(element, message){
    const ele = form[element].parentNode.querySelector('small');
    ele.style.display = 'block';
    if(message){
        ele.innerText = message
    }

    const img = form[element].parentNode.querySelector('img');
    img.style.display = 'block';

    const border = form[element].parentNode.querySelector('input');
    border.classList.add('error-border');
}

function removeErrors(element){
    const ele = form[element].parentNode.querySelector('small');
    ele.style.display = 'none';
    const img = form[element].parentNode.querySelector('img');
    img.style.display = 'none';

    const border = form[element].parentNode.querySelector('input');
    border.classList.remove('error-border');
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}