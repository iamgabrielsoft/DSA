import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Java implementation of letter combination
 */
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>(); 

        if(digits == null || digits.length() == 0){
            return result; 
        }

        Map<Character, String> mapper = new HashMap<>(); 
        mapper.put('2', "abc"); 
        mapper.put('3', "def"); 
        mapper.put('4', "ghi"); 
        mapper.put('5', "jkl"); 
        mapper.put('6', "mno"); 
        mapper.put('7', "pqrs"); 
        mapper.put('8', "tuv"); 
        mapper.put('9', "wxyz");
        

        checker(digits, 0, new StringBuilder(), result, mapper); 


        return result;
    }


    public void checker(String digits, int id, StringBuilder combination, List<String> result, Map<Character, String> mapper){
        if(id == digits.length()){
            result.add(combination.toString()); 
            return; 
        }

       String letters = mapper.get(digits.charAt(id)); 

        for(char letter : letters.toCharArray()) {
            combination.append(letter); 
            //move a step futher with backtracking technique
            checker(digits, id + 1, combination, result, mapper); 
            combination.deleteCharAt(combination.length() - 1); 
        }

    }

    public static void main(String[] args){
        
    }
}