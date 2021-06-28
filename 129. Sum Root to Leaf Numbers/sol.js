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
 * @return {number}
 */
var sumNumbers = function(root) {
    var ans=0
    function DFS(root,s){
        if(!root) return null
        if(!root.left && !root.right){
           ans+=parseInt(s+root.val);
            return;
        }
        DFS(root.left,s+root.val)
        DFS(root.right,s+root.val)
    }
    DFS(root,"")
    return ans
};
