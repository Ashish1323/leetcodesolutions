/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    var Stack=[]
    for(let i=0,j=1;i<target.length;i++,j++){
        Stack.push("Push")
        if(target[i] != j){
            Stack.push("Pop")
            i--
        }
    }
    return Stack
};