//https://www.codewars.com/kata/54ba84be607a92aa900000f1
//30 Januari 2024

// function isIsogram(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//         if (str[i].toLowerCase() === str[j].toLowerCase()) {
//           return false;
//         }
//     }
//   }
//   return true;
// }

const isIsogram = (str) =>
  str
    .toLowerCase()
    .split("")
    .every((char, _, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
