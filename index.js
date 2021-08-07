const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Password2'); 

//functions
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText =message;
}
 function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }

 //check email is valid
 function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "Enter valid Email!");
    }
}

//check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}
 //checkrequired function
 function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldname(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
 }

 //function for check Length
 function checkLength(input, min, max){
     if(input.value.length < min){
      showError(input, `${getFieldname(input)} must be atleast  ${min} chararcters!`)
     }
     else if(input.value.length> max){
         showError(input, `${getFieldname(input)} must be between ${min}  and  ${max} characters!`)
     }
     else{
         showSuccess(input);
     }
 }
//getfieldname function
function getFieldname(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});