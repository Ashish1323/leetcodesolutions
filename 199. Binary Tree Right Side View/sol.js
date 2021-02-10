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
var rightSideView = function(root) {
   function collection(root,level){
    if(root){
        if(level==arr.length){
            arr.push(root.val)
        }
                   console.log(level)
            collection(root.right,level+1)
            collection(root.left,level+1)
    }

}
    var arr=[]
    collection(root,0)
    return arr
};


// var rightSideView = function(root) {
//     var arr=[]
//     arr.push(root.val)
//     if(!root) return
//     if(root.left && root.right){
//         arr.push(root.right.val)
//         rightSideView(root.right)
//     }
//     // if(!root.right && root.left){
//     //     rightSideView(root.left)
//     // }
//     if(!root.left && root.right){
//         arr.push(root.right.val)
//         rightSideView(root.right)
//     };
//     if(!root.right && !root.left) {
//         return arr
//     }    
//     return arr
// }
