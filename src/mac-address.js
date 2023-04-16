const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

function isMAC48Address(n) {
  n = n.split('-');
  if(n.length === 6){
    for(let item of n){
      if(item.length === 2){
        if((letters.includes(item[0]) || (typeof +item[0] === 'number' && !isNaN(+item[0]))) && (letters.includes(item[1]) || (typeof +item[1] === 'number' && !isNaN(+item[1])))){
           
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
  }else{
    return false;
  }
  return true;
}

module.exports = {
  isMAC48Address
};
