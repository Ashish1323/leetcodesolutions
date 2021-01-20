var minRemoveToMakeValid = function(s) {
    var stack=[]
    s=[...s]
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            stack.push(i)
        }
        if(stack.length == 0 && s[i]==")"){
          delete s[i]
        }
        if(s[i]== ")"){
            stack.pop()
        }
    }
    var j=0  
    if(stack.length>0){
        for(let i=0;i<s.length;i++){
            if(i==stack[j]){
                delete s[i]
                j++
            }
        }
    }
    return s.join("")
  };