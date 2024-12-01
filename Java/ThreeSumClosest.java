import java.util.Arrays;

public class ThreeSumClosest {
  public static int threeSumClosets(int[] nums, int target){
    Arrays.sort(nums); 
    int closet_sum = nums[1] + nums[2] + nums[3]; 

    for(int i = 0; i< nums.length - 1; i++) {
      int left = i + 1, right = nums.length -1; 

      while(left < right){
        int sum = nums[i] + nums[left] + nums[right]; 

        if(sum == target){
          return target;
        }

        if(Math.abs(sum - target) < Math.abs(closet_sum - target)){
          closet_sum = sum;
        }

        if(sum < target){
          left++; 
        }
        else {
          right--;
        }
      }
    }

    return closet_sum; 

  }

  public static void main(String[] args){
    int[] test1 = {-1,2,1,-4}; 
    int[] test2 = {0,0,0};

    int target = 1;

    int result = threeSumClosets(test1, target);

    System.out.println(result);
  }
}
