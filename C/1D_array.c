
/// @brief solution for a 1d array
/// @param nums array of nums
/// @param numsSize the size of the nums
/// @param returnSize the pointer returnSize -> this must be free when returning
/// @return 
int* runingSum(int* nums, int numsSize, int* returnSize){
    *returnSize = numsSize; 

    for(int i = 1; i<numsSize; i++){
        nums[i] += nums[i - 1]; 
    }

    return nums; 
}