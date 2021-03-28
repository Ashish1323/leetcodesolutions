/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    word = word + " "
    //console.log(word)
    var sub = ""
    var stack = []
    for (var i = 0; i < word.length; i++) {

        if ((word.charCodeAt(i) >= 48 && word.charCodeAt(i) < 58) && (word.charCodeAt(i + 1) >= 48 && word.charCodeAt(i + 1) < 58)) {
            sub += word[i]
        }

        else if (sub.length) {
            sub += word[i]
            stack.push(sub)
            sub = ""
        }
        else if ((word.charCodeAt(i) >= 48 && word.charCodeAt(i) < 58) && sub.length==0) {
             stack.push(word[i])
        }


    }


    for(i=0;i<stack.length;i++){
        stack[i]=parseInt(stack[i])
    }
    var set=new Set(stack)
    return set.size
}