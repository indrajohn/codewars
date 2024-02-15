//https://www.codewars.com/kata/55edaba99da3a9c84000003b
//30 Januari 2024

// function divisibleBy(numbers, divisor) {
//   let _array = new Array();
//   numbers.forEach((element) => {
//     if (element === divisor || element % divisor === 0) {
//       _array.push(element);
//     }
//   });
//   return _array;
// }

const divisibleBy = (numbers, divisor) =>
  numbers.filter((element) => element % divisor === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1, 3, 5], 2));
