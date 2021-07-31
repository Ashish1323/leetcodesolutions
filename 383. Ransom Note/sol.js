/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var map = new Map();
  var map1 = new Map();
  for (let i of ransomNote) {
    if (!map.has(i)) map.set(i, 0);
    var v = map.get(i);
    map.set(i, ++v);
  }
  for (let i of magazine) {
    if (!map1.has(i)) map1.set(i, 0);
    var v = map1.get(i);
    map1.set(i, ++v);
  }
  for (let v of map.keys()) {
    if (!map1.has(v) || map.get(v) > map1.get(v)) {
      return false;
    }
  }
  return true;
};
