/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var currentNode=head;
    var setNode= new Set();
    while(currentNode != null){
        if(setNode.has(currentNode)){
            return currentNode
        }
        setNode.add(currentNode)
        currentNode=currentNode.next
    }
    return null
};