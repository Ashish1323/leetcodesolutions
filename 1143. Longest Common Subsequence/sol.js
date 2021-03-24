/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var l=0
    var m=0
    var A = [];
for (var i = 0; i < text1.length; i++) {
    A[i] = [];
    for (var j = 0; j < text2.length; j++) {
        A[i][j] = -1;
    }
}
    return lc(0,0,text1,text2,A)
};

const lc =(i,j,t1,t2,dp) => {
    if(i>=t1.length || j>=t2.length) return 0
    if(dp[i][j]!=-1) return dp[i][j]
    if(t1[i]==t2[j]) return 1+ lc(i+1,j+1,t1,t2,dp)
    
    else{
    var left=lc(i+1,j,t1,t2,dp)
    var right=lc(i,j+1,t1,t2,dp)
    
    return dp[i][j]=Math.max(left,right)
    }

}