//https://www.codewars.com/kata/58d248c7012397a81800005c
//30 Januari 2024

const cubeChecker = (volume, side) =>
  side > 0 && volume > 0 && side ** 3 === volume;

console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(-1, 2));
console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(0, 0));
console.log(cubeChecker(1, 5));
console.log(cubeChecker(125, 5));
console.log(cubeChecker(125, -5));
