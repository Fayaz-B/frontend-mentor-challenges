const form1 = document.getElementById('form-1');

const form2 = document.getElementById('form-2');

form1.addEventListener('submit', e =>{
    e.preventDefault();
    const email = form1['email-1'];
    const small =  form1.querySelector('small');
    const emailValue = email.value;
    
    if(!emailValue){
        small.innerText = 'Email field cannot be blank';
        small.classList.add('small');
        email.classList.add('input-error');
    } 
    else if(!validateEmail(emailValue)){
        small.innerText = 'Please check your email';
        small.classList.add('small');
        email.classList.add('input-error');
    }
    else{
        small.innerText = '';
        small.classList.remove('small');
        email.classList.remove('input-error');
    } 
});

form2.addEventListener('submit', e =>{
    e.preventDefault();
    const email = form2['email-2'];
    const small =  form2.querySelector('small');
    small.style.color = '#ffff';
    const emailValue = email.value;
    
    if(!emailValue){
        small.innerText = 'Email field cannot be blank';
        small.classList.add('small');
        email.classList.add('input-error');
    } 
    else if(!validateEmail(emailValue)){
        small.innerText = 'Please check your email';
        small.classList.add('small');
        email.classList.add('input-error');
    }
    else{
        small.innerText = '';
        small.classList.remove('small');
        email.classList.remove('input-error');
    } 
});




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}