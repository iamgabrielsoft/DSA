import Stack from "../stack";

/**
 * First method
 * @param {string | number} s 
 * @returns 
 */
var longestValidParenthesis = (s) => {
    let count = 0; 
    let left = 0; 
    let right = 0; 

    for(let i = 0; i<s.length; i++){
        let entity = s[i]; 

        if(entity === '('){
            left++; 
        }

        if(entity === ')') {
            right++; 
        }


        if(left === right){
            count = Math.max(count, left + right); 
        }

        if(right > left){
          left = right = 0; //reset everything
        }
        
    }


    //let start from the left hand side
    for(let i = s.length - 1; i>= 0; i--){
        let entity = s[i]; 

        if(entity === '('){
            left++; 
        }

        if(entity === ')'){
            right++; 
        }

        if(left === right){
            count = Math.max(count, left + right); 
        }

        if(left > right){
            left = right = 0; 
        }
    }


    return count; 
}; 


/**
 * Second method
 * solution base on stack
 */
var longestValidParenthesis = (s) => {
    let max = 0; 
    const stack = new Stack(); 
    stack.push(-1); 

    for(let i = 0; i<s.length; i++){
        if(s.charAt(i) == '('){
            stack.push(i); 
        }else {
            stack.pop(); 
            if(stack.isEmpty()){
                stack.push(i); 
            }else {
                max = Math.max(max, i - stack.peek()); 
            }
        }
    }

    return max; 
}


/** Third Method
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1];
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0) {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return maxLen;
};