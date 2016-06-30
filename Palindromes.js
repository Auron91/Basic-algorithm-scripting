
function palindrome(str) {
  // Good luck!
  var temp;
 str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
 temp = str.split("").reverse().join("");
  if (temp == str){
    return true;
  } else return false;
}


palindrome("My age is 0, 0 si ega ym.");
