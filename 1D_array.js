
var runingSum = function (nums) {
    //now we can follow two methods in solving this problem
    //we might sort the array after the index of 0 
    //then minus by the previous element inside the array


    //solution 1

    //     let results = []; 
    //     results[0] = nums[0]; //when its at index 0


    //     for(let i = 1; i<nums.length; i++){
    //        // results[i] = nums[i - 1] + results;
    //         results[i] = results[i - 1] + nums[i]; 
    //         console.log(results); 
    //     }

    //     return results; 



    //Solution 2
    let results = [];


    for (let i = 0; i < nums.length; i++) {
        results[0] = nums[0];
        results[i] = results[i - 1] + nums[i];
    }

    return results

    //the function -> Time complexity O(n)
    //Space complexity -> Space complexity O(1)
}
