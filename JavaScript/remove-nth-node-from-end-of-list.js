

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var removeNthFromEnd = function(head, n) {
    let counter = 0; 
    
    if(head == null || head.next == null && n == 1) return null; 

    let temp = head; 

    while(temp != null && temp.next != null){
        temp = temp.next; 
        counter++; 
    }; 


    let iterate = counter - n; 
    if(iterate < 0){
        head = head.next; 
        return head; 
    }; 


    let slow = head; 
    for(let i = 0; i<iterate; i++){
        slow = slow.next; 
    }


    slow.next = slow.next.next; 

    return head; 
};