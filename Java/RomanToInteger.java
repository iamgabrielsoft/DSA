import java.util.HashMap;
import java.util.Map;

class RomanToInt {
  public static int romanToInt(String s){
    int result = 0; 
    Map<Character, Integer> romanMap = new HashMap(); 

    romanMap.put('I', 1);
    romanMap.put('V', 5);
    romanMap.put('X', 10);
    romanMap.put('L', 50);
    romanMap.put('C', 100);
    romanMap.put('D', 500);
    romanMap.put('M', 1000); 

    for(int i = 0; i<s.length(); i++){
      int currVal = romanMap.get(s.charAt(i));

      if(i + 1 < s.length() && currVal < romanMap.get(s.charAt(i + 1))){
        result -= currVal;
      }else {
        result += currVal;
      }
    }


    return result;
  }

  public static void main(String[] args){
    int test = romanToInt("III");

    System.out.println(test);
  }
}