/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    int diameterOfBinaryTree(TreeNode *root)
    {
        if (root == NULL)
            return 0;
        return max((checkHeight(root->left) + checkHeight(root->right)), max(diameterOfBinaryTree(root->left), diameterOfBinaryTree(root->right)));
    }

    int checkHeight(TreeNode *node)
    {
        if (node == NULL)
            return 0;
        return max(checkHeight(node->left), checkHeight(node->right)) + 1;
    }
};