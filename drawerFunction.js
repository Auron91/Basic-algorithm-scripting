function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var counter = 0;
  arr.sort(function(a,b){return a-b;});
  for (var i=0;i<arr.length-1;i++){
    if (arr[i] < num && arr[i+1] >= num){
      counter = i+1;
    }
    
  }
  if (num > arr[arr.length-1]){
      counter = arr.length;
   }
  return counter;
}

getIndexToIns([2, 5, 10], 15);