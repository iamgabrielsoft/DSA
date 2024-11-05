


function palindrom(x) {
  x = Number.toString(x);

  let i, j;
  
  for(i = 0, j = x.length - 1; i<x.length / 2; i++, j--) {

    if(x.charAt(i) != x.charAt(j)){
      return false; 
    }
  }

  return true; 
}; 

console.log(palindrom(121));