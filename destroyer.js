function destroyer(arr) {
  // Remove all the values
  var args = [];
  var newArr = [];
   for (var i=0;i<arguments.length-1;i++){
     args[i]=arguments[i+1];
   }
  
  function filtrator(x){
    if(args.indexOf(x) !== -1){
      return false;
    }
    return true;
  }
  
 
return arr.filter(filtrator);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);