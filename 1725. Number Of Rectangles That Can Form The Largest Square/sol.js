/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    var res=[]
    for(i of rectangles){
        res.push(Math.min(i[0],i[1]))
    }
    var max=Math.max(...res)
    var count=0
    for(i of res) {
        if(i===max) count++ 
    }
    return count
};

