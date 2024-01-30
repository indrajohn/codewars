//https://www.codewars.com/kata/57a083a57cb1f31db7000028
//30 Januari 2024

// function powersOfTwo(n) {
//   let _array = new Array();
//   for (let i = 0; i <= n; i++) {
//     _array.push(Math.pow(2, i));
//   }
//   return _array;
// }

const powersOfTwo = (n) =>
  Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i));

console.log(powersOfTwo(4));
