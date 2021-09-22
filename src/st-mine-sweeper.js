import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper(matrix) {
  let matrix1 = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        matrix1[i][j] = 1;
       
        if (matrix[i - 1] !== undefined) {
          if (
            matrix[i - 1][j - 1] !== undefined &&
            matrix[i - 1][j - 1] !== true
          ) {
            matrix1[i - 1][j - 1] = matrix1[i][j] + 1;
          }
          if (matrix[i - 1][j] !== undefined && matrix[i - 1][j] !== true) {
            matrix1[i - 1][j] = matrix1[i - 1][j] + 1;
          }
          if (
            matrix[i - 1][j + 1] !== undefined &&
            matrix[i - 1][j + 1] !== true
          ) {
            matrix1[i - 1][j + 1] = matrix1[i - 1][j + 1] + 1;
          }         
        }
      
        if (matrix[i][j - 1] !== undefined && matrix[i][j - 1] !== true) {
          matrix1[i][j - 1] = matrix1[i][j - 1] + 1;
        }
        if (matrix[i][j + 1] !== undefined && matrix[i][j + 1] !== true) {
          matrix1[i][j + 1] = matrix1[i][j + 1] + 1;
        }
        if (
          matrix[i + 1][j - 1] !== undefined &&
          matrix[i + 1][j - 1] !== true
        ) {
          matrix1[i + 1][j - 1] = matrix1[i + 1][j - 1] + 1;
        }
        if (matrix[i + 1][j] !== undefined && matrix[i + 1][j] !== true) {
          matrix1[i + 1][j] = matrix1[i + 1][j] + 1;
        }
        if (
          matrix1[i + 1][j + 1] !== undefined &&
          matrix1[i + 1][j + 1] !== true
        ) {
          matrix1[i + 1][j + 1] = matrix1[i + 1][j + 1] + 1;
        }
      }

    }
  }
  // console.log(matrix1);

  return matrix1;
}
