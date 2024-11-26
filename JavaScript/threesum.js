

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a -b); 
  const result = [] 

  for(let i =0; i<nums.length - 2; i++){
    if(i > 0 && nums[i] === nums[i -1]) continue; //edge case to skip duplicates
      let left = i + 1; 
      let right = nums.length - 1; 

      while(left < right){
          const sum = nums[i] + nums[left] + nums[right]; 

          if(sum === 0){
            result.push([nums[i], nums[left], nums[right]])
            left++; 
            right--;
            

            //To ensure dulicates are skipped close to perfect
            while(left < right && nums[left] === nums[left - 1]) left++; 
            while(left < right && nums[right] === nums[right + 1]) right--; 
          }
          else if(sum < 0){
            left++; 
          }
          else {
            right--; 
          }
      }
  }

  return result; 
};


console.log(threeSum([0,0,0]))