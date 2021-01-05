/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
    let h=head;
    let position=1;
    let currentNode=head;            
    var startNode=currentNode
    var tailNode=currentNode
    var prev=null;
    var k=0
    while(position<=n){
        if(position==m-1){
            var startNode=currentNode
        }
        if(position==m){
            var tailNode=currentNode
        }
        if(position>m-1 && position<n+1){
            var next=currentNode.next
            currentNode.next=prev
            var prev=currentNode
            currentNode=next
            k++
        }
        position++
        if(k==0) currentNode=currentNode.next
    }  
    startNode.next=prev
    tailNode.next=currentNode
  
      if(m > 1) {
      return head
    } else {
      return prev;
    }
  };