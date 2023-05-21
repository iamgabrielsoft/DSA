
//[2,1,3] [1,2,3]
var nextPermutation = (nums) => {
  const swapping = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
  
  const reversing = (left) => {
    let right = nums.length - 1;

    console.log(right)

    while (left < right) {
      if (nums[left] < nums[right]) {
        swapping(left, right);
        left++;
        right--;
      }
    }
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    console.log('i:', i);
    for (let j = nums.length - 1; j > i; j--) {
      // console.log(`i: ${i}`, `j: ${j}`);
      if (nums[i] < nums[j]) {
        //we can swap the values
        swapping(i, j);
        //reverse it to several permutation
        reversing(i + 1);
        return;
      }
    }
  }


  reversing(0); //revert to its initial state [1, 2, 3]
};