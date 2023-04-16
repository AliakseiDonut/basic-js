const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains = domains.map(el => el.split('.')); 
  domains.forEach(el => {
    let arr = [];
    el.reverse().forEach(domain => {
      arr.push(`.${domain}`);
      if(!(arr.join('') in obj)){
        obj[arr.join('')] = 1;
      }else{
        obj[arr.join('')]++;
      }
    })
    arr = [];
  });
  return obj;
}

module.exports = {
  getDNSStats
};
