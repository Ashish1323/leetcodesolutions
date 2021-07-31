/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var map = new Map();
  for (let i of s) {
    if (!map.has(i)) map.set(i, 0);
    var v = map.get(i);
    map.set(i, ++v);
  }
  var e = [...map.entries()];
  e.sort((a, b) => b[1] - a[1]);
  var res = "";
  for (var i = 0; i < e.length; i++) {
    var n = e[i][1];
    while (n) {
      res += e[i][0];
      n--;
    }
  }
  return res;
};
