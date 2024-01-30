function sum(numbers) {
  "use strict";
  return numbers.reduce((total, arr) => total + arr, 0);
}

console.log(sum([]));
