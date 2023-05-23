
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


longestValidParenthesis('(');