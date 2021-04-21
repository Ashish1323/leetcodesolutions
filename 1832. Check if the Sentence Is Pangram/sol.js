/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var map=new Map()
    for(i=97;i<123;i++){
        map.set(String.fromCharCode(i),0)
    }
    //console.log(map)
    for(i of sentence){
        if(map.has(i)){
            var v=map.get(i)
            v+=1
            map.set(i,v)
        }
    }
    var arr=[...map.values()]
    for(i of arr){
        if(i==0) return false
    }
    return true
};