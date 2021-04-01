/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
   var s=""
  for(i=0;i<str.length;i++){
      if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91) s+=str[i].toLowerCase()
      else s+=str[i]
  }  
    return s
};