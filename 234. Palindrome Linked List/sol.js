/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var currentNode=head;
    var newhead= new ListNode()
    while(currentNode){
        newhead.val=currentNode.val
        if(currentNode.next!=null){
        var nextNode=new ListNode()
        nextNode.next=newhead
        newhead=nextNode    
        }
        currentNode=currentNode.next
    }
    while(head){
        if(newhead.val!= head.val) return false
        newhead=newhead.next
        head=head.next
    }
    return true
};