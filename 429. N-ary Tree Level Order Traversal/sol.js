/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
  var queue=[]
  queue.push(root)
    var res=[]
    var depth=0
    var num=0
    while(queue.length){
        res.push([])
        num=queue.length
        for(i=0;i<num;i++){
           var s=queue.shift()
           if(!s) continue
           res[depth].push(s.val)
           queue.push(...s.children) 
        }
        depth++
    }
    return res
};