/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var add=0
    var mul=1
  var a=n.toString().split("")
  for(i of a){
      add+=parseInt(i)
      mul*=parseInt(i)
  }
    return mul-add
};