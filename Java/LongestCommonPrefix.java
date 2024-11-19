
class LongestCommonPrefix {
  public static String longestCommonPrefix(String[] strs){
    if(strs.length == 0){
      return ""; 
    }

    String baseStr = strs[0]; //first string

    for(int i = 0; i< baseStr.length(); i++){
      char initialChar = baseStr.charAt(0); 

      for(String word : strs){
        if(i >= word.length() || word.charAt(i) != initialChar){
          return baseStr.substring(0, i);
        }
     
      }
    }

    return baseStr; 
  }

  public static void main(String[] args){
    String[] testCase1 = {"flower", "flow", "flight"};
    String[] testCase2 = {"internet", "interview", "intelligent"};
    String[] testCase3 = {"dog", "cat", "dump"};
    


    System.out.println(longestCommonPrefix(testCase1));
    System.out.println(longestCommonPrefix(testCase2));
    System.out.println(longestCommonPrefix(testCase3));
  }
}