
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//O(n + log(n))
const mergeKLists = (lists) => {
  if(!lists.length) return null;

  for(let i = 1; i<lists.length; i++){
    //merging happen here
    lists = merge(lists[0], lists[i]); 
  }; 

  return lists[0]; 
}; 


const merge = (list1, list2) => {
  if(list1 == null) return list2; 
  if(list2 == null) return list1; 


  if(list1.val < list2.val){
    list1.val = merge(list1.next, list2); 
    return list1; 
  }else {
    list2.val = merge(list1, list2.next); 
    return list2; 
  }
}