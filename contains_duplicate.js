/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if ([...new Set(nums)].length === nums.length) {
    return false;
  }

  return true;
};



/** method 2
 * @param {number[]} nums
 * @return {boolean}
*/

var containsDuplicate = function (nums){
  return nums.sort().some((val, index) => {
    var result = false; 

    result = nums.indexOf(val != index); 

    return result; 
  })
}