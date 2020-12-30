/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
       return l1 || l2;
   }
   var head1=l1;
   var head2=l2;
   var l3=new ListNode(null);
   if(head1.val>head2.val){
          l3=head2
          head2=head2.next
   }
   else{
          l3=head1
          head1=head1.next
   }
   var tail=l3;
   while(head1 && head2){
       if(head1.val>head2.val){
          var temp=head2
          head2=head2.next 
   }
   else{
          var temp=head1
          head1=head1.next
   }
       tail.next=temp
       tail= temp
       
   }
   if(head1!=null){
           tail.next=head1
       }
       else{
           tail.next=head2
       }
   return l3
};