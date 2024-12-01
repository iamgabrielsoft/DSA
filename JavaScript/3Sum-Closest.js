
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b); 
  let closest_sum = Infinity; 
  let sum; 

  for(let i = 0; i<nums.length - 2; i++){ 

    while(left < right){
      let left = i +1; 
      let right = nums.length - 1;

      while(left < right){
        sum = nums[i] + nums[left] + nums[right]; 

        if(Math.abs(target - sum) < Math.abs(target - closest_sum)){
          closest_sum = sum; 
        }

        if(sum < target){
          left += 1;
        }else if(sum > target){
          right -= 1; 
        }
        else {
          return sum; 
        }
      }
    }
  }

  return closest_sum; 
}