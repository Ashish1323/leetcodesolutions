/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var array=s.trim().split(" ")
    return array[array.length-1].length
};