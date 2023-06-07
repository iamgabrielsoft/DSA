import java.util.*;




public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        int[] result = new int[2]; 
        Map<Integer, Integer> map = new HashMap<>(); 
        
        for(int i = 0; i<nums.length; i++) {

            map.put(nums[i], i); 
        }

        return result; 
    }
    

    public static void main(String args[]) {
        int [] input = { 2, 6 , 10, 15}; 
        int target = 8; 

        int[] result = twoSum(input, target); 
        System.out.println(result);
    }
}