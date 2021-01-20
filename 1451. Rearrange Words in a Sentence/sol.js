/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    var array=text.toLowerCase()
    var arr=array.split(" ")
    var sortedarray=arr.sort((a,b) => a.length-b.length)
    sortedarray[0]=sortedarray[0].charAt(0).toUpperCase() + sortedarray[0].slice(1)
    return sortedarray.join(" ")
};