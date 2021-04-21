/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  var map=new Map()
  for(i of jewels) map.set(i)
    var c=0
  for(i of stones){
      if(map.has(i)) c++
  }
    return c
};