class Solution:
    def sortColors(self, nums: List[int]) -> None:
        n=len(nums)
        for i in range(n): 
            for j in range(0, n-i-1):  
                if nums[j] > nums[j+1] : 
                    nums[j], nums[j+1] = nums[j+1], nums[j] 
        
        """
        Do not return anything, modify nums in-place instead.
        """
        