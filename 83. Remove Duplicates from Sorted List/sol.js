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
var deleteDuplicates = function(head) {
        if (!head) return head;

    var h=head
    while(h.next){
        if(h.val==h.next.val){
            h.next=h.next.next
        }else{
        h=h.next
        }
    }
    return head
};