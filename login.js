localStorage.setItem("loguser", "test");
document.getElementById("loguser-name").innerHTML = localStorage.getItem("loguser");
localStorage.setItem("useremail", "test@test.com");
document.getElementById("loguser-email").innerHTML = localStorage.getItem("useremail");
localStorage.setItem("userpass", "123");
document.getElementById("loguser-pass").innerHTML = localStorage.getItem("userpass");
function sessioclose() {
   window.localStorage.clear();
   alert('Your are succesfully logout !');
   window.location="userlogin.html";
   return false;
}

// Function to check weather fields are filled or not and also check correct user or not. 
function verify() {
  var LogUser = document.forms["loginForm"]["loginName"].value;
  var LogEmail = document.forms["loginForm"]["emailId"].value;
  var LogPass = document.forms["loginForm"]["loginPass"].value;
  var ConfirmLogPass = document.forms["loginForm"]["confirmloginPass"].value;
  if(LogUser == null || LogUser == "", LogEmail == null || LogEmail == "", LogPass == null || LogPass == "", ConfirmLogPass == null || ConfirmLogPass == "" ) {
    alert('Please Fill All Fileds');
    return false;
  }
  if((LogUser == 'test') && (LogPass == '123')) {
    //window.open('UserDetailPage.html');
    if(LogPass != ConfirmLogPass) {
      alert('Your password do not match. Please try again !');
      ConfirmLogPass.focus();
      return false;
    }
    else {
      window.location="userdetails.html"; 
      return false;
    }
  }
}

// Function if user Abort login process.
function Abort() {
  history.back();
}

function getUserDetails() {
  this.name = 'test';
  this.email = 'test@tset.com';
}

