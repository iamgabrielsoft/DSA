
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let start = 0, end = nums.length; 

  while(start <= end){
    let mid = Math.floor((end + start) /2); //6+0/2=3
    if(nums[mid] === target){
      return mid; 
    }
    else if(nums[mid] > target){
      end = mid - 1; //left hand side
    }

    else {
      start = mid + 1;
    }
  }

  return start //right side 
}

console.log(searchInsert([1,3,5,6], 7));