//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
//30 Januari 2024

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return phrases[(nbPetals - 1) % phrases.length];
}
console.log(howMuchILoveYou(1));
