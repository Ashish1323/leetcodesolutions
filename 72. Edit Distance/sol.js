/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var dp=[]
    for(i=0;i<word1.length;i++){
        dp[i]=[]
        for(j=0;j<word2.length;j++){
            dp[i][j]=-1
        }
    }
    return dis(0,0,word1,word2,dp)
};

function dis(i,j,word1,word2,dp){
    if(i==word1.length) return word2.length-j
    if(j==word2.length) return word1.length-i
    if(dp[i][j]!=-1) return dp[i][j]
    if(word1[i]==word2[j]) return dis(i+1,j+1,word1,word2,dp)
    else{
        var left=1+dis(i,j+1,word1,word2,dp)
        var mid=1+dis(i+1,j,word1,word2,dp)
        var right=1+dis(i+1,j+1,word1,word2,dp)
        return  dp[i][j]=Math.min(left,mid,right)
    }
    
}