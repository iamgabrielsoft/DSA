

class MyAtoi {
  public static int myAtoi(String s) {
    int counter = 1; // Iterative counter
    int res = 0; 
    int idx = 0; 

    //edge case
    while(idx < s.length() && s.charAt(idx) == ' '){
      idx++; 
    }


    if(idx < s.length() && (s.charAt(idx) == '-' || s.charAt(idx) == '+')) {
      if(s.charAt(idx++) == '-'){
        counter = -1;
      }
    }


    //Controlling overflow and underflow of resource
    while(idx < s.length() && s.charAt(idx) >= '0' && s.charAt(idx) <= '9'){
      if(res > Integer.MAX_VALUE / 10 || (res == Integer.MAX_VALUE / 10 && s.charAt(idx) - '0' > 9)) {
        return counter == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
      }

      System.out.println(res);

      res = 10 * res + (s.charAt(idx++) - '0');
    }


    return counter * res;
  }

  public static int recursiveMethod(String s, int n) {

    if(s == "" || !s.matches("^\\d*$")) {
      return 0;
    }

    if(n == 1){
      return s.charAt(0) - '0';
    }


    return (10 * recursiveMethod(s, n - 1) + s.charAt(n -1) - '0');
  }

  public static void main(String[] args){
    
    String s  = "   -042";
    int n = s.length();

    int result = myAtoi(s);

   System.out.println(result);
  }
}