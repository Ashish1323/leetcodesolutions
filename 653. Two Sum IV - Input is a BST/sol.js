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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var arr=[]
    var queue=[root]
    while(queue.length){
        var num=queue.length
        while(num){
            var s=queue.shift()
            arr.push(s.val)
            if(s.left) queue.push(s.left)
            if(s.right) queue.push(s.right)
            num--
        }
    }
    var map=new Map()
    for(i=0;i<arr.length;i++){
        var target=k-arr[i]
        if(map.has(arr[i])) return true
        else map.set(target,i)
    }
    return false
};