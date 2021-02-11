# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        arr = []

        def pos(ro):
            if not ro:
                return 0
            pos(ro.left)
            pos(ro.right)
            arr.append(ro.val)
        pos(root)
        return arr
