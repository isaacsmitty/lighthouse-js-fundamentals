function lastIndexOf(array, val){
  var match = false;
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] === val){
      index = i;
      match = true;
    }
  }
  if (match){
    return index;
  } else {
    return -1;
  }
}

function lastIndexOf(array, val){
  var match = false;
  var index = 0;
  for (var i = array.length -1; i >= 0 ; i--) {
    if(array[i] === val){
      index = i;
      match = true;
      break
    }
  }
  if (match){
    return index;
  } else {
    return -1;
  }
}




console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
