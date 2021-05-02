/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var c=0
    while(num!=0){
        if(num%2==0){
            num/=2
            c++
        }
        else{
            num-=1
            c++
        }
    }
    return c
};