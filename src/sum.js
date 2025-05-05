// src/sum.js
/**
 * Tính tổng các phần tử trong mảng
  @param {number[]} arr
  @returns {number}
 */
export function sumArray(arr) {
    return arr.reduce((total, x) => total + x, 0);
  }