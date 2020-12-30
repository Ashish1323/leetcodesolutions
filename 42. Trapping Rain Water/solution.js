/**
 * @param {number[]} height
 * @return {number}
 */
var trap = height =>{
    let maxRight=[]
    let maxLeft=[]
    let len=height.length
    maxLeft[0]=height[0]
    maxRight[len-1]=height[len-1]

    for(i=1;i<len;i++){
        if(height[i]>maxLeft[i-1]){
            maxLeft.push(height[i])
        }
        else{
            maxLeft.push(maxLeft[i-1])
        }
    }
    for(j=len-2;j>=0;j--){
        if(height[j]>maxRight[j+1]){
            maxRight[j]=height[j]
        }
        else{
            maxRight[j]=maxRight[j+1]
        }
    }
    let sum=0
    for(k=0;k<len;k++){
        sum= sum +(Math.min(maxRight[k],maxLeft[k]) - height[k])
    }
 
    return sum
}
