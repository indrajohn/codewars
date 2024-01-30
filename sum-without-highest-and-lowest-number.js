//https://www.codewars.com/kata/576b93db1129fcf2200001e6
//30 Januari 2024

// function sumArray(array) {
//     if (!Array.isArray(array) || array.length <= 1) return 0;

//     let sortedArray = array.slice().sort((a, b) => a - b);
//     sortedArray.pop();
//     sortedArray.shift();

//     return sortedArray.reduce((acc, num) => acc + num, 0);
// }

const sumArray = (array) =>
  Array.isArray(array) && array.length > 1
    ? array.reduce((acc, num) => acc + num, 0) -
      Math.min(...array) -
      Math.max(...array)
    : 0;

console.log(sumArray([-6, 20, -1, 10, -12]));
