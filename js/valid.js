const username = document.getElementById('username');



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
    
    checkRequired([username]);
    check_username(username);
    

}    