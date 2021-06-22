/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var map=new Map()
    for(var i=0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    
    
function helper(start,end){
    if(start>end) return null;
    let val=postorder.pop()
    let node=new TreeNode(val)
    node.right=helper(map.get(val)+1,end)
    node.left=helper(start,map.get(val)-1)
    return node
}
    
    return helper(0,inorder.length-1)
};
