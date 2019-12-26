let userEmail;
let userPassword;
let changePassword;
let oldPassword;
let newPassword;
let repeatNewPassword;
let doThis = true;
let corPassforUser = 'UserPass';
let corPassforAdmin = 'AdminPass';
let six = 6;
let five = 5;

userEmail = prompt('Please,write your email');

if (userEmail === null || userEmail.length === 0) {
  alert('Canceled.');
  doThis = false;
}

if (doThis && userEmail.length < five) {
  console.log(userEmail.length);
  alert("I don't know any emails having name length less than 5 symbols.");
  doThis = false;
}

if (
  doThis &&
  (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com')
) {
  if (userEmail === 'user@gmail.com') {
    userPassword = prompt('Please,write your password');
    if (userPassword === null || userPassword.length === 0) {
      alert('Canceled.');
      doThis = false;
    }
    if (doThis && userPassword === corPassforUser) {
      changePassword = confirm('Do you want to change your password?');
      if (changePassword === false) {
        alert('You have failed the change.');
        doThis = false;
      }
      if (changePassword === true) {
        oldPassword = prompt('Please, write the old password');
        if (oldPassword === null || oldPassword.length === 0) {
          alert('Canceled.');
          doThis = false;
        }
        if (oldPassword === 'UserPass') {
          newPassword = prompt('Please, write the new password');
          if (newPassword === null || newPassword.length === 0) {
            alert('Canceled.');
            doThis = false;
          }
          if (doThis && newPassword.length < six) {
            alert('It’s too short password. Sorry');
            doThis = false;
          }
          if (doThis) {
            repeatNewPassword = prompt('Please, repeat your new password');
          }
          if (doThis && newPassword !== repeatNewPassword) {
            alert('You wrote the wrong password.');
            doThis = false;
          }
          if (doThis && newPassword === repeatNewPassword) {
            alert('You have successfully changed your password.');
            doThis = false;
          }
        }
        if (doThis) {
          alert('Wrong password');
          doThis = false;
        }
      }
    }
    if (doThis) {
      alert('Wrong password');
      doThis = false;
    }
  }
  if (userEmail === 'admin@gmail.com') {
    userPassword = prompt('Please,write your password');
    if (userPassword === null || userPassword.length === 0) {
      alert('Canceled.');
      doThis = false;
    }
    if (doThis && userPassword === corPassforAdmin) {
      changePassword = confirm('Do you want to change your password?');
      if (changePassword === false) {
        alert('You have failed the change.');
        doThis = false;
      }
      if (changePassword === true) {
        oldPassword = prompt('Please, write the old password');
        if (oldPassword === null || oldPassword.length === 0) {
          alert('Canceled.');
          doThis = false;
        }
        if (oldPassword === 'AdminPass') {
          newPassword = prompt('Please, write the new password');
          if (newPassword === null || newPassword.length === 0) {
            alert('Canceled.');
            doThis = false;
          }
          if (doThis && newPassword.length < six) {
            alert('It’s too short password. Sorry');
            doThis = false;
          }
          if (doThis) {
            repeatNewPassword = prompt('Please, repeat your new password');
          }
          if (doThis && newPassword !== repeatNewPassword) {
            alert('You wrote the wrong password.');
            doThis = false;
          }
          if (doThis && newPassword === repeatNewPassword) {
            alert('You have successfully changed your password.');
            doThis = false;
          }
        }
        if (doThis) {
          alert('Wrong password');
          doThis = false;
        }
      }
    }
    if (doThis) {
      alert('Wrong password');
      doThis = false;
    }
  }
}
if (doThis) {
  alert("I don't know you");
}
