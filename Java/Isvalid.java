import java.util.Stack;

class IsValid {
    public boolean solution(String s) {
        Stack<Character> stack = new Stack<>(); 

        for(char ch: s.toCharArray()) {
            switch(ch){
                case '(':
                case '{':
                case '[':
                    stack.push(ch); 
                    break; 
                case ')':
                    if(stack.isEmpty() || stack.pop() != '(') {
                        return false; 
                    }

                    break; 

                case '}':
                    if(stack.isEmpty() || stack.pop() != '{') {
                        return false; 
                    }

                    break; 


                case ']': 
                    if(stack.isEmpty() || stack.pop() != '[') {
                        return false; 
                    }

                    break; 
            }
        }

        return stack.isEmpty(); 
    }

    public static void main(String[] args){
        
    }
}