
//[2,1,3] [1,2,3]
var nextPermutation = (nums) => {
    let i = nums.length - 2; 

    while(i>=0 && nums[i]>= nums[i + 1]) i-- 
    {
        console.log(i); 
        if(i>0){
            
            let j = nums.length -1; 
            console.log(`i: ${i}, j:${j}`); 
            while(nums[i] >= nums[j]) j--
            {
                swap(nums, i, j); 
            }
        }
    }


   //reverse(arr, i, arr.length - 1); 
   reverse(nums, i + 1, nums.length - 1)

   function swap(arr, i, j){
    let temp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = temp; 
   }


   function reverse(arr, i, j){
    while(i < j){
        swap(arr, i++, j--); 
    }
   }


   console.log(nums); 
   return nums; 
}

nextPermutation([1, 2, 3]);