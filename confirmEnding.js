function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ending;
  ending = str.substring(str.length-target.length);
  if (ending === target){
    return true;
  } else return false;
  
}

confirmEnding("Bastian", "n");
