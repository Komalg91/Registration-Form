const username = document.getElementById('username');
const email = document.getElementById('email');


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
    

}    