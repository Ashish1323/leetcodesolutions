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
var sumRootToLeaf = function(root) {
  var arr=0
  function DFS(root,s){
      if(!root){
          return
      }
    if (!root.left && !root.right) {
            arr += parseInt(s + root.val, 2);
            return;
        }
      s+=root.val.toString()
      DFS(root.left,s)
      DFS(root.right,s)
  }
    DFS(root,"")
    return arr
};