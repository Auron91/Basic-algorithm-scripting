function mutation(arr) {
  var index = [];
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
   arr[1]=arr[1].split("");
  for (var i =0;i<arr[1].length;i++){
    index[i]= arr[0].indexOf(arr[1][i]);
  }
  
  index.sort(function(a,b){return a-b;});
 if (index[0]==-1){
   return false;
 } else return true;
}

mutation(["hello", "heylox"]);