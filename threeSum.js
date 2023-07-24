/**
 * Method 1
 * https://leetcode.com/problems/3sum/description/
 * @param {Array<number>} nums 
 * @returns an array
 */

function threeSum1(nums){
    const arr = []; 

    let target = 0; 

    for(let i = 0; i< nums.length - 2; i++){
        let j = i + 1; //from the middle
        let k = nums.length - 1; //coming from the right-hand side

        while(j < k){
            const sum = nums[i] + nums[j] + nums[k]; 
            console.log('print here:', sum); 

            //where our target is zero
            if(sum === target) {
                arr.push([nums[i], nums[j], nums[k]]);
                console.log(arr); 
                while(nums[j] === nums[j - 1]) {
                    j++; 
                }; 


                while(nums[k] == nums[k -1]) {
                    k--; 
                } 

                j++; 
                k--; 
            }

            else if(j < k){
               
                j++; 
            }

            else {
               
                k--; 
            }
        }
    }

    return arr; //an empty array
}



/**
 * Mehod 2
 * https://leetcode.com/problems/3sum/description/
 */
function threeSum2(nums) {
    nums.sort((a, b) => a - b); 

    let aa = []; 

    for(let i = 0; i<nums.length; i++){
        if(i > 0 && nums[i - 1] === nums[i]) {
            continue; 
        }

        let target = -nums[i]; 
        for(let L = i + 1, R = nums.length - 1; L < R;){
            let sum = nums[L] + nums[R]; 

            if(sum === target){
                aa.push([nums[i], nums[L], nums[R]]); 
                L++; 
            
            }else if(sum < target){
                L++; 
            
            }else {
                R--; 
            }
        }
    }; 

    return aa; 
}; 

console.log(threeSum2([0,0,0])); 