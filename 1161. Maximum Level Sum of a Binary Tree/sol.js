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
var maxLevelSum = function(root) {
    var queue=[]
    queue.push(root)
    var arr=[]
    var count=0
    
    while(queue.length){
        var num=queue.length
        while(num){
            var s=queue.shift()
            count+=s.val
            if(s.left) queue.push(s.left)
            if(s.right) queue.push(s.right)
            num--
        }
        arr.push(count)
        count=0
    }
    return arr.indexOf(Math.max(...arr))+1
};