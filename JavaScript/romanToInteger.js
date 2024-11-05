

/**
 * 
 * @param {string} s 
 */
const romanToInteger = (s) => {
  let curr_val; 
  let result = 0; 

  let num_mapper = {
    'I': 1, 
    'V': 5, 
    'X': 10, 
    'L': 50,
    'C': 100, 
    'D': 500, 
    'M': 1000
  }; 

  for(let i =0; i<s.length; i++){
    curr_val = num_mapper[s[i]]; 

    if(i + 1 < curr_val && curr_val < num_mapper[s[i + 1]]){
      result -= curr_val; 
    }else {
      result += curr_val; 
    }
  }

  return result; 
}; 

console.log(romanToInteger('XL'))