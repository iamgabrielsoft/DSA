/**
 * https://leetcode.com/problems/3sum/description/
 * @param {Array<number>} nums 
 * @returns an array
 */

function threeSum(nums){
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


threeSum([0,0,0]); 