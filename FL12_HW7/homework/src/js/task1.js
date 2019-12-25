// Your code goes here

// Step 1. Check login
// 	Ask user for an email // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 5 symbols - show “I don't know any emails having name length less than 5 symbols”. 
// 	If the visitor enters "user@gmail.com" or "admin@gmail.com" 
//then prompt for a password.
// 	If it’s another string – then show “I don’t know you”.

let userEmail;
let userPassword;
let changePassword;
let oldPassword;
let newPassword;
let repeatNewPassword;
let isValid = true;
let corPassforUser = 'UserPass';
let corPassforAdmin = 'AdminPass';

userEmail = prompt('Please,write your email');

//console.log(userEmail.length);


if (userEmail === null || userEmail.length === 0) {
    alert('Canceled.');
    isValid = false;
}


if (isValid && (userEmail.length < 5)) {
    console.log(userEmail.length);
    alert('I don\'t know any emails having name length less than 5 symbols.');
    isValid = false;
}

if (isValid == true && (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com')) {
    userPassword = prompt('Please,write your password');
    if (userPassword === null || userPassword.length === 0) {
        alert('Canceled.');
        isValid = false;
    }

    if (isValid === true && (userPassword === corPassforUser || userPassword === corPassforAdmin)) {
        //Change the password
        changePassword = confirm('Do you want to change your password?');
        if (changePassword === false) { alert('You have failed the change.'); }
        if (changePassword === true) {
            oldPassword = prompt('Please, write the old password');
            if (oldPassword === null || oldPassword.length === 0) {
                alert('Canceled.');
            }
            if (oldPassword === 'UserPass' || oldPassword === 'AdminPass') {
                //Якщо коректний
                newPassword = prompt('Please, write the new password');
                if (newPassword === null || newPassword.length === 0) {
                    alert('Canceled.');
                }
                if (newPassword.length < 6) {
                    alert('It’s too short password. Sorry');
                } else {
                    repeatNewPassword = prompt("Please, repeat your new password");
                }
                if (newPassword !== repeatNewPassword) {
                    alert('You wrote the wrong password.');
                }
                if (newPassword === repeatNewPassword) {
                    alert('You have successfully changed your password.');
                }
            }
            else { alert('Wrong password'); }
        }
    }
    else {
        alert('Wrong password');
    }
}
else {
    alert('I don\'t know you');
}

