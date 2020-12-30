/**
 * @param {string} s
 * @return {boolean}
 */
var isValid =function(s) {
    var stack=[]
    var open= new Map([["{","}"],["(",")"],["[","]"]])
    var close= new Map([["}","{"],[")","("],["]","["]])
  for(let i=0;i<s.length;i++){
  if(open.get(s[i])){
    stack.push(s[i])
  } else if(close.get(s[i])== stack[stack.length-1]){
    stack.pop()
  } 
  else{
      return false
  }
}
return stack.length == 0
}