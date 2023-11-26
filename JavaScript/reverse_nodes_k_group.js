
class ListNode {
  data; 
  next; 

  constructor(data){
    this.data = data; 
    this.next = null; 
  }
}




const reverseKGroup = (head, k) => {
  let counter = 0; 

  for(let i = head; i != null; counter++, i++); 



  let node = new ListNode(0); 
  node.next = head; 

  console.log(node); 




  for(let prev = node, tail = head; counter >= k; counter -= k){
    for(let i = 1; i<k; i++){
      let next = tail.next.next; 
      tail.next.next = prev.next; 
      prev.next = tail.next; 
      tail.next = next;
    }



    //perform swapping here
    prev = tail; 
    tail.next = next; 
  }


  return node.next; 
}; 

reverseKGroup(1,2,3,4,5, 0);