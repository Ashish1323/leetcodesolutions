/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var map=new Map()
    for(var i=0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    
    
function helper(start,end){
    if(start>end) return null;
    let val=preorder.shift()
    let node=new TreeNode(val)
    node.left=helper(start,map.get(val)-1)
    node.right=helper(map.get(val)+1,end)
    return node
}
    
    return helper(0,inorder.length-1)
};

