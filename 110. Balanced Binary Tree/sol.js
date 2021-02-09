/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root)  return true
    var left=height(root.left)
    var right=height(root.right)
    if(Math.abs(right-left)<=1) return true
    return false
};

function height(root){
    if(!root) return 0
    var x=height(root.left)
    var y=height(root.right)
    return x>y? x+1:y+1
}