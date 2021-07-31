/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = new Map();
  for (let i of nums) {
    if (!map.has(i)) map.set(i, 0);
    var v = map.get(i);
    map.set(i, ++v);
  }
  var e = [...map.entries()];
  e.sort((a, b) => b[1] - a[1]);
  var res = [];
  var i = 0;
  while (k--) {
    res.push(e[i][0]);
    i++;
  }
  return res;
};
