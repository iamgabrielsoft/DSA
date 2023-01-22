
console.log("solving fizbuz algo"); 



//space complexity O(1)
//Time complexity O(N)
module.exports = function(num){
    var arr = []; 
    console.log('starting the solution');

    for(let i = 0; i<=num; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            arr[i] = 'Fizzbuzz';
            continue; 
        } 

        else if(i % 3 == 0 && i % 5 !== 0) {
            arr[i] = 'Fizz';
            continue; 
        }

        else if(i % 3 !== 0 && i % 5 == 0) {
            arr[i] = 'buzz';
            continue;
        }

        else {
            arr[i] = i; 
            continue; 
        }
    }

    //arr.shift(); 
    return arr; 
};
