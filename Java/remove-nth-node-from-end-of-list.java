


class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n){
        int counter = 0; 

        if(head == null || head.next == null && n ==1) return null; 

        ListNode temp = head; 


        while(temp != null && temp.next != null){
            temp = temp.next; 
            counter++; 
        }


        int iter = counter - n; 


        if(iter < 0){
            head = head.next; 
            return head; 
        }

        ListNode stage = head; 

        for(int i = 0; i<iter; i++){
            stage = stage.next; 

        }


        stage.next = stage.next.next;

        return head; 
    }
}