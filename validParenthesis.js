
/**
 * This is a Leetcode problem
 * method 1
 * https://leetcode.com/problems/valid-parentheses/
 * @param {*} s 
 * @returns boolean
 */
var isValid = function(s){
    const stack = []; 
    const pairs = {
        '(': ')', 
        '{': '}', 
        '[':']'
    }

    //for case 1
    if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false; 

    //case 2
    if(s[s.length - 1] === '(' || s[s.length - 1] === '}' || s[s.length - 1] === ']') return false; 


    for(let i in s){
        //case 3
        if(s[i] === '(' || s[i] === '{' || s[i] === ']'){
            stack.push(s[i]); 
        
            //edge case for stack underflow
        }else if(pairs[stack.pop()] != stack[i]){
            return false; 
        }
    }; 


    return stack.length === 0; 
}; 


/**
 * method 2
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(const letter of s){
        if(letter === '('){
            stack.push(')')
        
        }else if(letter === '{'){
            stack.push('}')
        
        }else if(letter === '['){
            stack.push(']')
        }

        //another edge case

        else if(stack.length === 0 || stack.pop() !== letter){
            return false; 
        }
    }


    return stack.length === 0; 
};
