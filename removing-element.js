//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
//30 Januari 2024

const removeEveryOther = (arr) => arr.filter((_, index) => index % 2 === 0);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
