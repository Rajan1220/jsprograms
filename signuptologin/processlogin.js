function ajax_post(){
  var url = "process.php";
  var uname = document.getElementById('user').value;
  var uemail = document.getElementById('user-email').value;
  var upass = document.getElementById('user-pass').value;
  var vars = "username=" + uname + "&uemail=" + uemail + "&upass=" + upass;
  if (uname == '' || uemail == '' || upass == '') {
    alert("Please Fill All Fields");
  }
  else {
    var hrf = new XMLHttpRequest();
    hrf.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("signup").innerHTML = this.responseText;
      }
    };
    hrf.open('POST','process.php',true);
    hrf.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hrf.send(vars);
  }  
}