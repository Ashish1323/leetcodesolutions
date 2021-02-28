class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        count,j=0,0
        if ruleKey=="type":
            j=0
        if ruleKey=="color":
            j=1
        if ruleKey=="name":
            j=2
        
        for i in range(len(items)):
            if items[i][j]==ruleValue:
                count+=1
                
                
        return count        
                
        