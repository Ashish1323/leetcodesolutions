/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var nums=num.toString()
    const arr=[...nums]
    console.log(arr)
    for(i=0;i<arr.length;i++){
        if(arr[i]=='6'){
          arr[i]='9'
            break
        } 
    }
    return arr.join("")
};