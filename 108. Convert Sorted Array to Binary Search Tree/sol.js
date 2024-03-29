/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function DFS(nums,left,right){
        if(left>right) return null
        var mid=Math.floor((left+right)/2)
        var node=new TreeNode(nums[mid])
        node.left=DFS(nums,left,mid-1)
        node.right=DFS(nums,mid+1,right)
        return node
    }
    return DFS(nums,0,nums.length-1)
};