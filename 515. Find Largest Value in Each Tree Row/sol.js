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
var largestValues = function(root) {
    if(!root) return []
  var arr=[]
  var res=[]
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
      res.push(Math.max(...arr))
      arr=[]
  }
    return res
};s