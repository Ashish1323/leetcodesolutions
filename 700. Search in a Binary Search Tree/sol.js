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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return 0
     if(root.val==val){
        return root
    }
    var l=searchBST(root.left,val)
    if(l) return l
    var r=searchBST(root.right,val)
    if(r) return r
    return null
};

