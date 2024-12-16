public class SearchInsert {
  public int _searchInsert(int[] nums, int target){
    int start = 0, end = nums.length - 1; 

    while(start <=end){
      int mid = (int) Math.floor((start + end)/2);
      
      if(nums[mid] == target){
        return mid;
      }
      else if(nums[mid] > target){
        end = mid -1;
      }
      else {
        start = mid + 1;
      }
    }
    return start; 
  }

  public static void main(String[] args){
    int[] testCase1 = {1,3,5,6}; 
    int target = 7; 

    SearchInsert obj = new SearchInsert();

    int result = obj._searchInsert(testCase1, target);
    System.out.println(result);
  }
}
