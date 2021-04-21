/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(!s.length || !t.length || s.length!=t.length) return false
    var map=new Map()
    var map1=new Map()
    for(i=0;i<s.length;i++){
        if(!map.has(s[i])) map.set(s[i],0)
        var v=map.get(s[i])
        v+=1
        map.set(s[i],v)
    }
    for(i=0;i<t.length;i++){
        if(!map1.has(t[i])) map1.set(t[i],0)
        var v=map1.get(t[i])
        v+=1
        map1.set(t[i],v)
    }
      let arr = []
  map.forEach((value, key) => arr.push([key, value]))  
    let arr1 = []
  map1.forEach((value, key) => arr1.push([key, value]))
    return arr.sort((a,b)=> a[0].localeCompare(b[0])).toString()===arr1.sort((a,b)=> a[0].localeCompare(b[0])).toString()
};