class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        len1 = len(word1)
        len2 = len(word2)
        i = 0
        j = 0
        newStr = ""
        while(len1 and len2):
            newStr += word1[i]
            newStr += word2[j]
            i += 1
            j += 1
            len1 -= 1
            len2 -= 1

        while(len1):
            newStr += word1[i]
            i += 1
            len1 -= 1
        while(len2):
            newStr += word2[j]
            j += 1
            len2 -= 1

        return newStr
