/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root,ans=[]) {
  if(!root) return ans
    
   ans.push(root.val)
    for(i of root.children)
        preorder(i,ans)
    
    return ans
};