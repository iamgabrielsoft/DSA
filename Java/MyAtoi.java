

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

  public static int recursiveMethod(String s) {


    return 1;
  }

  public static void main(String[] args){
    
    String s  = "1337c0d3";

    int result = myAtoi(s);

   System.out.println(result);
  }
}