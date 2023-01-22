
//time complexity
//space time complexity ->


module.exports = function steps_to_divide(largesum) {
    let steps = 0; 

    while(steps < largesum) {
        if(largesum % 2 === 0) { 
            largesum /= 2; 
        }

        else { 
            largesum -= 1; 
        }


        steps++; 
    }


    return steps;  
}; 
