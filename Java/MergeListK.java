


class Solution {
  public ListNode mergeListK(ListNode[] lists){
    if(lists == null || lists.length == 0){
      return null; 
    }

    return merging(lists, 0, lists.length - 1); 
  }

  private ListNode merging(ListNode[] lists, int start, int end){
    if(start == end){
      return lists[start]; 
    }

    if(start + 1 == end){
      return merge(lists[start], lists[end]); 
    }

    int mid = start + (end - start) / 2; 
    ListNode left = merging(lists, start, mid); 
    ListNode right = merging(lists, mid + 1, end); 

    return merge(left, right); 
  }

  private ListNode merge(ListNode list1, ListNode list2){
    ListNode node = new ListNode(0); 
    ListNode current = node; 

    while(list1 != null && list2 != null){
      if(list1.val < list2.val){
        current.next = list1; 
        list1 = list1.next; 
      
      }else {
        current.next = list2; 
        list2 = list2.next;
      }
    }

    return node.next; 
  }

  public static void main(String[] args){
    
  }
}