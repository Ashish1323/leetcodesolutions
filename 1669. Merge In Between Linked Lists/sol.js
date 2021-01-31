/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    var head1=list1
    var head2=list2
    var counta=0
    var countb=0
    while(head1){
        if(counta==a){
            var a1=prev
        }
        if(countb==b){
            var b1=head1.next
        }
        var prev=head1
        head1=head1.next
        counta++
        countb++
    }
    
    while(head2){
        if(head2.next==null){
            var p1=head2
        }
        head2=head2.next
    }
    
    a1.next=list2
    p1.next=b1
    
    return list1
};