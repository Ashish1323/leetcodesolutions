/**
 * // Definition for a Node.
 * function Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


var flatten = function(head) {
    if (!head) return head;
    var currentNode=head
    while(currentNode !==null){
     if(currentNode.child===null){
         currentNode=currentNode.next
     }
        else{
        var tail=currentNode.child
        while(tail.next!=null){
            tail=tail.next
        }
        var nextNode=currentNode.next
        // putting the last node 
        tail.next=currentNode.next
        if (tail.next !== null) {
            tail.next.prev = tail;
          }
        // putting the front node
        // currentNode.child.prev=currentNode
        // currentNode.next=currentNode.child
        currentNode.next = currentNode.child;
        currentNode.next.prev = currentNode;
        //removing the child.
        currentNode.child=null 
     }  
  }
  return head  
}