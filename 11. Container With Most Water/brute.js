/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var area;
    var max=0;
    for (let i=0; i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            if(height[i]>=height[j]){
                area=height[j]*(j-i)
            }
            else if(height[i]<height[j]){
                area=height[i]*(j-i)
            }
            
            if(area>max){
                max=area;
            }
        }
    }
    return max;
};