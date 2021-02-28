# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        arr = []
        self.loda(root, arr)
        return arr

    def loda(self, root, arr):
        if root:

            self.loda(root.left, arr)
            arr.append(root.val)
            self.loda(root.right, arr)
        """
        :type root: TreeNode
        :rtype: List[int]
        """
