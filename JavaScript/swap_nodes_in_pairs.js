/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var current = head; 
  var prev = null; 
  var temp; 
  var node1; 
  var node2; 
  var workAround; 

  while(current){
      if(!current.next){
          break; 
      }

      temp = current.next.next; //3 => 4
      node1 = current; // 1 => 2 => 3 => 4
      node2 = current.next;  // 2 => 3 => 4

      node1.next = temp; // 1 => 3 =>4
      node2.next = node1;  //2 => 1 => 3 => 4
      if(prev){
          prev.next = node2; 
      }else {
           workAround = node2; 
      }

      
      prev = node1; 
      current = temp; 
  }; 


  if(workAround){
      workAround.next = head; 
  }else {
      workAround = head; 
  }

  return workAround; 


//     if(head == null){
//         return; 
//     }

//   let previousX = null; 
//   let currentX = head; 

//   while(currentX != null && currentX.data != null){
//     previousX = currentX; 
//     currentX = currentX.next; //next value inside the node
//   }

//   let previousY = null; 
//   let currentY = head; 

//   if(currentY != null && currentY.data != null){
//     previousY = currentY; 
//     currentY = currentY.next; 
//   }

//   if(currentX == null || currentY == null){
//     return; 
//   }


//   if(previousX != null){
//     previousX.next = null; 
//   }else {
//       head = currentY.next
//   }

//   let temp = currentX.next; 
//   currentX.next = currentY.next; 
//   currentY.next = temp; 

//   return temp; 
};