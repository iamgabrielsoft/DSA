
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let baseStr = strs[0]; //the initial value
  if(strs.length === 0){
    return ""; //an empty string
  }

  for(let i in baseStr){
    for(let word of strs.slice(1)){
    //  console.log(baseStr.slice(0, 2))
      //console.log(baseStr.slice(0, 1))
     // console.log(baseStr.slice(0, i))
      if(i == word[i] || word[i] !== baseStr[i]){
        return baseStr.slice(0, i)
      }
     
    }
  }


  return baseStr;
}; 
