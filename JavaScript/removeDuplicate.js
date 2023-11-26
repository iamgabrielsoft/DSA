/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let counter = 0; 

  if(nums.length == 0){
      return ;
  } 

  else {
    //  let ptr = nums[0];//get the first element in the array 

      for(let i = 1; i<nums.length; i++){
          if(nums[counter] != nums[i]){
              nums[++counter] = nums[i]; 
          // console.log(nums[++counter]); 
          }


          //return counter + 1; 
      }
  }

 return counter + 1; 
};