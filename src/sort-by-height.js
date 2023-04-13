const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let posNums = arr.filter(el => el != -1);
  posNums.sort((a, b) => a - b);
  let i = 0;
  let res = arr.map(el => {
    if(el == -1){
      return -1;
    }else{
      return posNums[i++];
    }
  });
  return res;
}

module.exports = {
  sortByHeight
};


// for(let i = 0; i < arr.length; i++){
//   let frstEl;
//   let scndEl;
//   while(i == -1){
//     frstEl = arr[i];
//     i++;
//   }
//   while(i == -1){
//     scndEl = arr[i];
    
//   }
// }