//https://www.codewars.com/kata/568018a64f35f0c613000054
//30 Januari 2024

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives <= 0) throw "Expect error already dead";
    return this.number === n ? this.lives > 0 : !this.lives--;
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(3));
