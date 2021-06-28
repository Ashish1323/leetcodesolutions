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
var findMode = function(root) {
    var map=new Map()
    var queue=[root]
    while(queue.length){
        var num=queue.length
        while(num){
            var s=queue.shift()
            if(!map.has(s.val)) map.set(s.val,0)
            var v=map.get(s.val)
            v++
            map.set(s.val,v)
            if(s.left) queue.push(s.left)
            if(s.right) queue.push(s.right)
            num--
        }
    }
    var arr=[]
    
    for(let [k,v] of map.entries()){
        arr.push([k,v])
    }
    arr.sort((a,b)=>b[1]-a[1])
    var res=[]
    for(var i=0;i<arr.length;i++){
        if(arr[0][1]==arr[i][1]) res.push(arr[i][0])
        else return res
    }
    return res
};
