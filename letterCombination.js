


/**
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
}