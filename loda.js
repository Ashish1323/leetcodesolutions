/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  var stack=[]
  var sub=""
  var s=[]
//  console.log(s.length)
  console.log(s)
  for(var i=0;i<s.length;i++){
      console.log("ss")
      if(s.charCodeAt(i)==40) stack.push(s[i])
      else if(s.charCodeAt(i)!=40 && stack.length) sub+=s[i]
      else if(s.charCodeAt(i)==40 && stack.length){
          stack.pop()
          s.push(sub)
          sub=""
      }
        console.log(s,"ss")
  }
  
};
console.log(evaluate("(name)is(age)yearsold",[["name","bob"],["age","two"]]))
//console.log(evaluate("leet1234code234"))
//console.log(evaluate("a1b01c001"))

