function repeatStringNumTimes(str, num) {
  // repeat after me
var temp=str;
  if(num <=0){
    return "";
  } else
  for (i=1;i<num;i++){
    temp +=str;
  }
 
  return temp;
}
repeatStringNumTimes("*", 3);