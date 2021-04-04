 /**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    var f=[]
    f.length=k
    f=f.fill(0)
    var map=new Map()
    for(i=0;i<logs.length;i++){
        if(!map.has(logs[i][0])) map.set(logs[i][0],[])
        var v=map.get(logs[i][0])
        v.push(logs[i][1])
        map.set(logs[i][0],v)
    }
    const iterator = [...map.values()]
    //console.log(iterator)
    for(var i of iterator){
        var set=new Set(i)
        f[set.size-1]+=1
    }
    //console.log(map)
    return f

};