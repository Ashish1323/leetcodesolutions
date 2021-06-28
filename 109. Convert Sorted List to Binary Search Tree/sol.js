/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return null
    var arr=[]
    while(head) arr.push(head.val), head=head.next
    function DFS(nums,left,right){
        if(left>right) return null
        var mid=Math.floor((left+right)/2)
        var node=new TreeNode(nums[mid])
        node.left=DFS(nums,left,mid-1)
        node.right=DFS(nums,mid+1,right)
        return node
    }
    return DFS(arr,0,arr.length-1)
};