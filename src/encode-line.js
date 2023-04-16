const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let counter = 0;
  let res = [];
  str.forEach((el, i) => {
      if(el == str[i + 1]){
        counter++;
      }else{
        if(++counter > 1){
          res.push(`${counter}${el}`);
          counter = 0;
        }else{
          res.push(`${el}`);
          counter = 0;
        }
      }
  });
  return res.join('');
}

module.exports = {
  encodeLine
};
