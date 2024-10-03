import java.util.HashSet;
import java.util.Set;

public class ContainsDuplicate {
    public boolean Solution(int[] nums) {
        Set<Integer>set = new HashSet<Integer>();

        for(int xs: nums){
            set.add(xs); 
        }


        if(set.size() == nums.length){
            return false; 
        }

        return true;
    }

    public static void main(String[] args){
        
    }
}
