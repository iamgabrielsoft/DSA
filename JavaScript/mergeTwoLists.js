



class ListNode {
  static key; 
  next = null; 

  constructor(key, next){
    this.key = key;
    this.next = next
  }
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = (l1, l2) => {
  let tempNode = new ListNode(0, null); 
  let currNode = tempNode; 

  while(l1 && l2){
    if(l1.val < l2.val){
      currNode.next = l1; 
      l1 = l1.next; 
    }else {
      currNode.next = l2; 
      l2 = l2.next; 
    }

    currNode = currNode.next; 
  }

  currNode.next = l1 || l2; 

  return tempNode.next; 
}