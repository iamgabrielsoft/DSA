


/**
 * method 1
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits){
    let mapper = {
        2: ["a", "b", "c"], 
        3: ["d", "e", "f"], 
        4: ["g", "h", "i"], 
        5: ["j", "k", "l"], 
        6: ["m", "n", "o"], 
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"], 
        9: ["w", "x", "y", "z"]
    }; 

    let result = []; 

    const checker = (combination, next) => {
        if(next.length === 0){
            result.push(combination); //push an empty string
        }

        for (let letter of mapper[next[0]]){
            checker(combination + letter, next.slice(0)); 
        }
    }

    if(digits){
        checker("", digits); 
    }
    
    return result; //when not  found
}; 




/**
 * method 2
 * @param {string} digits
 * @returns {string[]} 
 */
const letterCombinations = (digits) => {
    const result = []; 

    const mapper = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const checker = (id, combination) => {
        if(id === digits.length){
            result.push(combination); 
            return result; 
        }

        for(let key of mapper[digits[id]]){
            checker(id + 1, combination + key); 
        }
    }

    checker(0, ''); 

    return result; 
}