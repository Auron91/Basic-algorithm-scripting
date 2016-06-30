

function titleCase(str) {
  var letters =[];
 str=str.toLowerCase().split(" ");
  for(var i=0; i<str.length;i++){
    str[i]=str[i].split("");
    str[i][0] = str[i][0].toUpperCase();
  }
  
  for(var j=0; j<str.length;j++){
    str[j] = str[j].join("");
  }
  str = str.join(" ");
  return str;
}

titleCase("I'm a little tea pot");