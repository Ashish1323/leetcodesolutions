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
    vector<vector<int>> levelOrder(TreeNode *root)
    {
        vector<vector<int>> res;
        if (!root)
            return res;
        queue<TreeNode *> q;
        q.push(root);

        while (q.size())
        {
            vector<int> traverse;
            int size = q.size();
            while (size)
            {
                TreeNode *n = q.front();
                q.pop();
                traverse.push_back(n->val);
                if (n->left)
                {
                    q.push(n->left);
                }
                if (n->right)
                {
                    q.push(n->right);
                }
                size--;
            }
            res.push_back(traverse);
        }

        return res;
    }
};
s