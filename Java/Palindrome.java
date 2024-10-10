
class Palindrome {
  public static boolean myPalindrome(int x){
    //avoid negative numbers
    if(x < 0){
      return false; 
    }

    //convert an integer to a string
    String str = Integer.toString(x);

    //initialization of variables
    int i; 
    int j; 

    //extra initialization 
    for(i = 0, j = str.length() - 1; i < str.length() / 2; i++, j--){
      if(str.charAt(i) != str.charAt(j)){
        return false;
      }
    }

    return true;
  }

  public static void main(String[] args){
    int test = 121; 

    boolean x = myPalindrome(test); 

    System.out.println(x);

  }
}