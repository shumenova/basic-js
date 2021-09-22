import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {  
  let arr = [];
  let s = n.toString();

  for (let i = 0; i < s.length; i++){
   arr.push(s.substring(0,i) + s.substring(i+1));
  }



  return Math.max.apply(Math, arr);
}
