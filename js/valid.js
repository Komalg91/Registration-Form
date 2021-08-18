const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const c_password = document.getElementById('c_password');


function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//UC1
function check_username(input){
    const min_user = 3;
    const max_user = 20;
    if(input.value.length < min_user){
        showError(input, `${input.id} must be atleast 3 characters`);
    }
    else if(input.value.length > max_user){
        showError(input, `${input.id} characters exceeded`)
    }
    else{
        showSuccess(input);
    }
}

//UC2
function check_email(input){
    const regex_email =  /^([a-zA-Z0-9_.]+)(@)([a-zA-Z]+)(.)([a-zA-Z]+)(.)?([a-zA-Z]?)$/;
    if(regex_email.test(input.value.trim())==false)
    {
        showError(input, `${input.id} is invalid`);
    }
    else{
        showSuccess(input);
    }
}

//UC3
function check_password(input){
    const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex_password.test(input.value.trim())==false)
    {
        showError(input, `${input.id} pattern is not matching`);
    }
    else{
        showSuccess(input);
    }
}

function check_c_password(input1, input){
    if(input.value !== input1.value){
            showError(input, 'Password is not matching');
    }
}

function checkRequired(input_ele){
    input_ele.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

const validate = () => {
    
    checkRequired([username,email]);
    check_username(username);
    check_email(email);
    check_password(password);
    check_c_password(password,c_password);
    

}    