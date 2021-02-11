# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        arr = []

        def pre(ro):
            if not ro:
                return 0
            arr.append(ro.val)
            pre(ro.left)
            pre(ro.right)
        pre(root)
        return arr
