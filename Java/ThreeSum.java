import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ThreeSum {
  public static List<List<Integer>> threeSum(int[] nums) {
    Set<List<Integer>> result = new HashSet<>(); 

    Arrays.sort(nums); //sort the array from lowest to the highest

    for(int i = 0; i<nums.length -2; i++){
      int left = i + 1;
      int right = nums.length - 1; 

      while(left < right){
        int sum = nums[i] + nums[left] + nums[right]; 

        if(sum == 0){
          result.add(Arrays.asList(nums[i], nums[left], nums[right]));

          left++; //increment the left-hand side
          right--; //decrement the right0-hand side
        }
        else if(sum < 0){
          left++; //increment the left-hand side
        }
        else {
          right--; //decrement the right-hand side
        }
      }
    }

    return new ArrayList<>(result);
  }

  public static void main(String[] args) {
    int[] testCase1 = {-1,0,1,2,-1,-4}; 
    int[] testCase2 = {0,1,1};
    int[] testCase3 = {0,0,0};

    List<List<Integer>> result = threeSum(testCase1); 

    System.out.println(result);
    
  }
}
