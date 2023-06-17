

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

