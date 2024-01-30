//https://www.codewars.com/kata/57f780909f7e8e3183000078
//30 Januari 2024
const grow = (x) => x.reduce((total, value) => total * value, 1);
console.log(grow([1, 2, 3]));
