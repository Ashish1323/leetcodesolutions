/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    function DFS(root1,root2){
        if(!root1 && !root2) return null;
        else if(!root2) return root1
        else if (!root1) return root2
        var node=new TreeNode(root1.val+root2.val)
        node.left=DFS(root1.left,root2.left)
        node.right=DFS(root1.right,root2.right)
        return node
    }
    
    return DFS(root1,root2)
};