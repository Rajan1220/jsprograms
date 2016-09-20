newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'login.js';
document.getElementsByTagName('head')[0].appendChild(newScript);

var a = new getUserDetails();
console.log(a.name);
console.log(a.email);
