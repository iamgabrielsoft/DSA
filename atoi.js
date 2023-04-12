/**
 * solving leetcode atoi 
 * since we know that the -2^31 = -2147483648 and 2^31 - 1 = 2147483647
 */
function atoi(s) {
    if(typeof s === "string"){
        return change(
        +s
            .trim()
            .match(/^(^[\-\+]|[0-9])/g)
            .join("")
        );
    }
    
   console.log('parameter passed is not a string...')
}



function change(val) {
    if (val > 2147483647) return 2147483647;
    if (val < -2147483648) return -2147483648;

    console.log(val);
    return val; //this could still work val || 0
}

atoi("555")