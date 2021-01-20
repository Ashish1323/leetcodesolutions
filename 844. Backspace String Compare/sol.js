/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let str1=[]
    let str2=[]
    for(i=0;i<checkArray.length;i++){
        if(S[i]==="#"){
            str1.pop()
        }
        else{
        str1.push(checkArray[i])
        }
    }
    for(i=0;i<checkArray2.length;i++){
        if(T[i]==="#"){
            str2.pop()
        }
        else{
        str2.push(checkArray2[i])
        }
    }

    return str1.join('')== str2.join('')

};