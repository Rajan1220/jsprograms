function signup() {
	var ajaxRequest;  // The variable that makes Ajax possible!
   try{
   
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest();
   }catch (e){
      
      // Internet Explorer Browsers
      try{
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         
         try{
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
         
            // Something went wrong
            alert("Your browser broke!");
            return false;
         }
      }
   }
   ajaxRequest.onreadystatechange=function()
  {
  if (ajaxRequest.readyState==4 && xmlhttp.status==200)
    {
    var ajaxDisplay = document.getElementById('signup');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
      aler(ajaxRequest.responseText);
    }
  }
	// Now get the value from user and pass it to
  // server script.
  var uname = document.getElementById('user').value;
  var uemail = document.getElementById('user-email').value;
  var upass = document.getElementById('user-pass').value;
  //var queryString = "?age=" + age ;
  var url = "process.php" 
  queryString += "&uname=" + uname + "&uemail=" + uemail + "&upass=" + upass;
  ajaxRequest.open("POST", url, true);
  ajaxRequest.send(null); 
}




/*<script type="text/javascript">
function loadXMLDoc(uname, pass)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var ajaxDisplay = document.getElementById('txtHint');
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
    }
  }
  if(!uname) { var uname = document.getElementById('uname').value; }
  if(!pass) { var pass = document.getElementById('pass').value; }
 
xmlhttp.open("GET","login.php?uname=" + uname + "&pass=" + pass + "&login=" + 'login', true);
xmlhttp.send();
	return false;
}
</script>*/