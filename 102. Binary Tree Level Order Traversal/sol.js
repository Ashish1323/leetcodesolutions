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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    var array=[]
    var queue=[]
     var array1=[]
    queue.push(root)
    
    while(queue.length){
        var size=queue.length
        for(let i=0;i<size;i++){
          var current=queue.shift() 
         
          array1.push(current.val)
          if(size-1==i){
              array.push(array1)
              array1=[]
          }
         if(current.left!=null)
         {
             queue.push(current.left);
         }
         if(current.right!=null){
                  queue.push(current.right);
         }
               
        }
    }
    return array
};