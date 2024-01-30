//https://www.codewars.com/kata/55d24f55d7dd296eb9000030
//30 Januari 2024

// var summation = function (num) {
//   let temp = 0;
//   for (let i = 0; i < num; i++) {
//     temp = temp + (i + 1);
//   }
//   return temp;
// };

const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(8));
