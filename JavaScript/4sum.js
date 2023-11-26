

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = (nums, target) => {
    let resultant = []; 

    nums.sort((a, b) => a - b); 

    if(nums == null || nums.length < 4){
        return resultant; 
    }; 


    for(let i = 0; i<nums.length - 3; i++){
        if(i >= 0 && nums[i] && nums[i - 1]){
            continue; 
        }

        for(let j = i + 1; j < nums.length - 2; j++){
            if(j != i + 1 && nums[j] == nums[j - 1]) {
                continue; 
            }


            let k = j + 1; 
            let l = nums.length - 1; //nums.length - 1
            
            let _acc = nums[i] + nums[j] + nums[k] + nums[l]; //four sum here
            
            while(k < l){
                if(_acc < target){
                    k++; 
                }else if(_acc > target) {
                    l--;
                }
                
                else {
                    resultant.push(nums[i], nums[j], nums[k], nums[l]); //when its equals to
                    k++; 
                    l--; 

                    while(k < l && nums[k] == nums[k -1]){
                        k++; 
                    }

                    while(l > k && nums[l] == nums[l + 1]){
                        l--; 
                    }
                }
            }
            
        }
    }; 

    return resultant; 
}; 
