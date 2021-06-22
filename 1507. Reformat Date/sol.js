/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    var a=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var map=new Map()
    for(var i=1;i<=12;i++){
        if(i<10) map.set(a[i-1],"0"+i.toString())
        else map.set(a[i-1],i.toString())
    }
    var res=""
    
    var d=date.split(" ")
    return  d[0].charCodeAt(1)>=97 && d[0].charCodeAt(1)<=122 ? d[2]+"-"+map.get(d[1])+"-"+"0"+d[0][0] : d[2]+"-"+map.get(d[1])+"-"+d[0][0]+d[0][1]
};