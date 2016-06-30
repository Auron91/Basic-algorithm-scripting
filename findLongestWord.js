function findLongestWord(str) {
  str = str.split(" ");
  var howManyLetters =[];
  for (var i=0; i<str.length; i++){
   howManyLetters[i]=str[i].length;
  }
   howManyLetters.sort(function(a, b){
  return b-a;
});
  return howManyLetters[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");