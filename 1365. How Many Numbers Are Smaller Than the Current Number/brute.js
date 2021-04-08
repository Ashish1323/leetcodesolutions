var smallerNumbersThanCurrent = function(nums) {
    var s=[]
    var c=0
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(nums[i]>nums[j]) c++
        }
                        s.push(c)
                c=0
    }
    return s
};