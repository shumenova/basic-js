import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let arr2 = [];
  let arr3 = [];
  let k = 0; 

  for (let i = 0; i < arr.length; i++){
    if (arr[i] != -1) {
      arr2.push(arr[i]);
    }
  }

  arr2.sort((a,b)=>a-b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr[i] = arr2[k];
      k++;
      
    }
  }
  for (let i = 0; i < arr.length; i++){
    arr3.push(arr[i]);
  }
  return arr3;
}
