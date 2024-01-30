//https://www.codewars.com/kata/54edbc7200b811e956000556
//30 Januari 2024

const countSheeps = (sheep) =>
  sheep.reduce((temp, value) => (value === true ? temp + 1 : temp), 0);

console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
