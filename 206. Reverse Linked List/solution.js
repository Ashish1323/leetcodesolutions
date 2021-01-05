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
var reverseList = (current) => {
    let prev=null  
    while(current){
          let next=current.next; //assigning next from current.next
          current.next=prev; // getting current.next value from prev
          prev=current; //prev for storing current value
          current=next // changing values to next node.
      }
      return prev
  }