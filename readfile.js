document.getElementById("file").onchange = function(){
  
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Reads Entire file onload
    console.log(this.result);

    // Reads file line by line
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};