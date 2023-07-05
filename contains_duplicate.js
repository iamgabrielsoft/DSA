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
