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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var arr=[]
    var s=""
    
    function DFS(root,s){
        if(!root) {
            return
        }
        if(!root.left && !root.right){
            arr.push(s+root.val)
            return
        }
        DFS(root.left,s+root.val+"->")
        DFS(root.right,s+root.val+"->")
    }
    DFS(root,"")
    return arr
};
