//https://www.codewars.com/kata/5708f682c69b48047b000e07
//15 Februari 2024

const multiply = (number) =>
  number *
  5 ** (number > 0 ? number.toString().length : number.toString().length - 1);

console.log(multiply(10));
console.log(multiply(5));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-2));
console.log(multiply(-51457));
