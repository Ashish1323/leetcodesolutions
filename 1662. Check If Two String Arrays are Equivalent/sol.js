/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  var w1=""
  var w2=""
  for(i of word1) w1+=i
  for(j of word2) w2+=j
  return w1===w2  
};