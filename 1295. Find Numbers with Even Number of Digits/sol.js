


/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var c=0
    for(i of nums){
        if(count(i)%2==0) c++
    }
    return c
};

var count = x =>{
    var c=0
    while(x!=0){
        x=Math.floor(x/10)
        c++
    }
    return c
}