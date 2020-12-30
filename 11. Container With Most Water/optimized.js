/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var area;
    var max=0;
    for (let i=0,j=height.length-1; i<height.length;){
            if(height[i]>=height[j]){
                area=height[j]*(j-i)
                j--
            }
            else{
                area=height[i]*(j-i)
                i++
            }
            
            if(area>max){
                max=area;
            }
    }
    return max;
};