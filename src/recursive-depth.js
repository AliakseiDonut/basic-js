const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let max = 1;
    arr.forEach(element => {
      if(Array.isArray(element)){
        counter += this.calculateDepth(element);
      }
      max = Math.max(counter, max)
      counter = 1;
    });
    return max;
  }
}

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([[[]]]));

module.exports = {
  DepthCalculator
};
