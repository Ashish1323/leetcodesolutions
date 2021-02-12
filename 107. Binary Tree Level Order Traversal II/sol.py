# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        arr = []
        queue = []
        a1 = []
        queue.append(root)
        sumw = 0
        while(len(queue)):
            leng = len(queue)
            for i in range(0, leng):
                current = queue.pop(0)
                a1.append(current.val)
                if i == leng-1:
                    arr.append(a1)
                    a1 = []
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

        return arr[::-1]
