class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        arr = []
        queue = []
        queue.append(root)
        sumw = 0
        while(len(queue)):
            leng = len(queue)
            for i in range(0, leng):
                print(i)
                current = queue.pop(0)
                sumw = sumw+current.val
                if i == leng-1:
                    arr.append(sumw/leng)
                    print(arr)
                    sumw = 0
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

        else:
            return arr
