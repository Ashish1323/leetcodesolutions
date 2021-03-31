var wt=[25,25,35]
var val=[100,100,280]
var w=50

var dp=[]
for(i=0;i<wt.length;i++){
    dp[i]=[]
    for(j=0;j<51;j++){
        dp[i][j]=-1
    }
}
//[[-1,5,],[],[]]
//console.log(dp)


function KnapSack(i,wt,val,w,dp){
    if(w==0) return 0
    if(i>=wt.length) return 0
    if(dp[i][w]!=-1) return dp[i][w]

    if(w>=wt[i]){
        var left= val[i] + KnapSack(i+1,wt,val,w-wt[i],dp)
        var right=KnapSack(i+1,wt,val,w,dp)
        return dp[i][w]=Math.max(left,right)
    }
    else{
        return dp[i][w]=KnapSack(i+1,wt,val,w,dp)
    }
}

console.log(KnapSack(0,wt,val,w,dp))