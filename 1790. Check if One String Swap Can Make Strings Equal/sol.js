/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1==s2) return true
    if(s1.length!=s2.length) return false
    var stack=[]
    for (let i=0;i<s1.length;i++){
        if(s1.charAt(i)!=s2.charAt(i) && stack.length){
            var index=stack.pop()
            var stacks=stack.pop()
            //console.log(index,"I")
            //console.log(stacks, s1[i])
            var news=setCharAt(s1,index,s1[i])
            //console.log(news)
            news=setCharAt(news,i,stacks)
        }
        if(s1.charAt(i)!=s2.charAt(i)) {
            stack.push(s1[i])
            stack.push(i)
        }
    }
    //console.log(s1,news)
    return news==s2
};


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}