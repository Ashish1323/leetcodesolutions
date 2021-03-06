/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    var array=[]
    var vala=[]
    for(i=0;i<points.length;i++){
        if(points[i][0]==x || points[i][1]==y) array.push(points[i])
    }
    if(array.length==0) return -1
    if(array.length==1) {
        return points.indexOf(array[0])
    }
    for(i=0;i<array.length;i++){
        var val=Math.abs(array[i][0]-x) + Math.abs(array[i][1]-y) 
        vala.push(val)
    }
    var mina=Math.min(... vala)
    //
    
    
    console.log(vala,vala.indexOf(min), mina)
    return points.indexOf(array[vala.indexOf(mina)])
};