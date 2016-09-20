// Function to check weather fields are filled or not and also check correct user or not. 
function verify() {
  var i;
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
      //document.forms["loginForm"]["confirmloginPass"].value.focus();
      ConfirmLogPass.focus();
      return false;
    }
    else {
      //var url = "http://localhost/jsprograms/UserDetailPage.html";
      window.location="userdetails.html"; 
      return false;
    }
  }
}

// Function if user Abort login process.
function Abort() {
  history.back();
}