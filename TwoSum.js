
//https://leetcode.com/problems/two-sum/solutions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @description first method
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let storage = {};

    for(let i = 0; i<nums.length; i++){
        let diff = target - nums[i];

        if(diff in storage){
            return [i, storage[diff]];
        }

        storage[nums[i]] = i

        // console.log(storage);
    }
};


/**
 * @description secon method
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i in nums) {
    let index = target - nums[i]; //6 - 1 = 5

    if (index in obj) {
      return [i, obj[index]];
    }

    console.log(i);

    obj[nums[i]] = i;

    // console.log(obj[nums[i]])
  }
};



/**
 * @description third method
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        const pairNum = target - nums[i];
        const indexOfNum = nums.indexOf(pairNum);
        console.log(pairNum);

//we don't want an empty array and we dont want the index for the loop again
        if(indexOfNum !== -1 && indexOfNum !== i){
            return [i, indexOfNum];
        }
    }
}
