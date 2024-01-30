// function findMultiples(integer, limit) {
//   let multiples = [];
//   for (let i = integer; i <= limit; i += integer) {
//     multiples.push(i);
//   }
//   return multiples;
// }

const findMultiples = (integer, limit) =>
  Array.from(
    { length: Math.floor(limit / integer) },
    (_, i) => integer * (i + 1)
  );

console.log(findMultiples(5, 25));
