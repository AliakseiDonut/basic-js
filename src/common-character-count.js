const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function charCounter(s){
  let obj = {};
  s = s.split('');
  s.forEach(element => {
    if(!obj.hasOwnProperty(element)){
      obj[element] = 1;
    }else{
      obj[element]++;
    }
  });
  return obj;
}

function getCommonCharacterCount(s1, s2) {
  const obj1 = charCounter(s1);
  const obj2 = charCounter(s2);
  let counter = 0;
  for(key in obj1){
    if(obj2.hasOwnProperty(key)){
      counter += Math.min(obj1[key], obj2[key]);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
