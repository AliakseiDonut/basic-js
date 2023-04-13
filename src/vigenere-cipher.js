const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const repeatKey = (key, length) => {
  while(key.length < length){
    key += key;
  }
  return key.slice(0, length);
}

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.reverse = boolean;
  }
  encrypt(word , key) {
    if(!word || !key){
      throw new Error('Incorrect arguments!');
    }
    word = word.toUpperCase();
    let arr = word.split('').filter(el => ALPHABET.includes(el));
    key = key.toUpperCase();
    key = repeatKey(key, arr.length)
    let i = 0;
    let res = word.split('').map(el => {
      if(ALPHABET.includes(el)){
        return ALPHABET[(ALPHABET.indexOf(el) + ALPHABET.indexOf(key[i++])) % 26];
      }else{
        return el;
      }
    });
    if(this.reverse){
      return res.join('');
    }else{
      return res.reverse().join('');
    }
  }
  decrypt(word , key) {
    if(!word || !key){ 
      throw new Error('Incorrect arguments!'); 
    } 
    word = word.toUpperCase(); 
    let arr = word.split('').filter(el => ALPHABET.includes(el)); 
    key = key.toUpperCase(); 
    key = repeatKey(key, arr.length) 
    let i = 0; 
    let res = word.split('').map(el => { 
      if(ALPHABET.includes(el)){ 
        return ALPHABET[(ALPHABET.indexOf(el) - ALPHABET.indexOf(key[i++]) + 26) % 26]; 
      }else{ 
        return el; 
      } 
    }) 
    if(this.reverse){ 
      return res.join(''); 
    }else{ 
      return res.reverse().join(''); 
    } 
  }
}

module.exports = {
  VigenereCipheringMachine
};

