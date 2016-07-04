function rot13(str) { // LBH QVQ VG!
  var utfCode = [];
  var decoded = [];
  for (var i=0; i<str.length;i++){
  utfCode[i] = str.charCodeAt(i);
    if(utfCode[i]>= 78){
    utfCode[i]=utfCode[i]-13;
    } else if(utfCode[i]<78 && utfCode[i]>=65){
      utfCode[i]=utfCode[i]+13;
    }
    
   decoded[i]=String.fromCharCode(utfCode[i]);
  }
  decoded = decoded.join("");
  
  return decoded;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");