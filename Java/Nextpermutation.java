import java.util.*;

class Solution {
    public void nextPermutation(int[] nums) {
        for(int i = nums.length -2; i>=0; i--){
            for(int j = nums.length -1; j>i; j--){
               // System.out.print(i);
               if(nums[j] > nums[i]){
                   this.swapping(nums, i, j); 
                   this.reversing(nums, i + 1); 
                   return; 
               }
            }
        }

       reversing(nums, 0); 
    }


    public void swapping(int[] nums, int i, int j){
        int temp = nums[i]; 
        nums[i] = nums[j]; 
        nums[j] = temp; 

        //[[nums[i], nums[j]] = [[nums[j], nums[i]]]; 
    }


    public int reversing(int[] nums, int left) {
        int right = nums.length - 1; 
        while(right > left){
            this.swapping(nums, left, right); 
            left++; 
            right--; 
        }
        // while(left < right){
        //     this.swapping(nums, i, j); 
        //     left--; 
        //     right++; 
        // }


        return 0; 
    }

    public static void main(String[] args){
        
    }
}