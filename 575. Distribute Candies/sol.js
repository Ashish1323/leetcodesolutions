/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  var count = [];
  for (let i = 0; i < candyType.length; i++) {
    if (!count.includes(candyType[i])) count.push(candyType[i]);
  }
  return count.length > candyType.length / 2
    ? candyType.length / 2
    : count.length;
};
