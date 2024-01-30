//https://www.codewars.com/kata/563e320cee5dddcf77000158
//30 Januari 2024
function getAverage(marks) {
  const sum = marks.reduce((acc, val) => acc + val, 0);
  const average = sum / marks.length;
  return Math.floor(average);
}

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
