function chunkArrayInGroups(arr, size) {
  var result = [];
 
  for(var i=0;i<arr.length;i=i+size){
  result.push(arr.slice(i,i+size));
  }
  // Break it up.
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);