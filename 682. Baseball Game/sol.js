/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack=[]
    var sum=0
    for(var i=0;i<ops.length;i++){
        if(ops[i]=="+") {
            stack.push(Number(stack[stack.length-1])+Number(stack[stack.length-2])) 
        }
       else if(ops[i]=="D") {
            var r=stack[stack.length-1]*2
            stack.push(r)
        }
       else if(ops[i]=="C") {
            stack.pop() 
        }
        else {
            stack.push(ops[i])
        }
        //console.log(stack)
    }
    for(i of stack) sum+=Number(i)
    
    return sum
};