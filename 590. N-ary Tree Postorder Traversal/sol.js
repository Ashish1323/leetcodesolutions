/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root,ans=[]) {
  if(!root) return ans
    
    for(i of root.children)
        postorder(i,ans)
    ans.push(root.val)
    
    return ans
};