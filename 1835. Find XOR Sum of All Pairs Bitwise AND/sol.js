/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
    return arr1.reduce((a, c) => a ^ c) & arr2.reduce((a, c) => a ^ c)
};