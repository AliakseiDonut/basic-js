const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split('');
  let arr = [];
  let max = 0;
  for(let i = 0; i < n.length; i++){
    for(let j = 0; j < n.length; j++){
      if(i != j){
        arr.push(n[j]);
      }
    }
    if(+arr.join('') > max){
      max = +arr.join('');
    }
    arr = [];
  }
  return max;
}

module.exports = {
  deleteDigit
};
