//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
//30 Januari 2024

// function repeatStr(n, s) {
//   let temp = "";
//   for (let i = 0; i < n; i++) {
//     temp = temp + s;
//   }
//   return temp;
// }

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(2, "ha "));
