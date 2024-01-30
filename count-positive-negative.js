//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
//30 Januari 2024

// function countPositivesSumNegatives(input) {
//   // your code here
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] != 0) {
//       if (input[i] >= 0) {
//         positive++;
//       } else {
//         negative = negative + input[i];
//       }
//     }
//   }
//   return Array(positive, negative);
// }

const countPositivesSumNegatives = (input) =>
  input
    ? [
        input.filter((n) => n > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
