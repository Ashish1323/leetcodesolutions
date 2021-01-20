/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len=digits.length
    for(i=len-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits
        }
        digits[i]=0
    }
    let newe=[]
    newe.length=len+1
    newe.fill(0)
    newe[0]=1
    return newe
};