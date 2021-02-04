/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    return getLeaves(root1).toString() == getLeaves(root2).toString()
};

function getLeaves(root, vals = []) {
    if (!root) return vals;
    if (!root.left && !root.right) {
        vals.push(root.val);
    }
    getLeaves(root.left, vals);
    getLeaves(root.right, vals);
    return vals;
}