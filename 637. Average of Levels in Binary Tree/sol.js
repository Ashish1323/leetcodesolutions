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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var arr=[]
    var queue=[]
    var sum=0
    queue.push(root)
    while(queue.length){
        var len=queue.length
        for(let i=0;i<len;i++){
            var node=queue.shift() 
            sum+=node.val
            if(i==len-1){
                arr.push(sum/len)
                sum=0
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return arr
};