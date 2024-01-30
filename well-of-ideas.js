//https://www.codewars.com/kata/57f222ce69e09c3630000212
//30 Januari 2024

function well(x) {
  let countBad = 0;
  let countGood = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "bad") {
      countBad++;
    } else {
      countGood++;
    }
  }
  if (countGood > 2) {
    return "I smell a series!";
  } else if (countGood <= 2 && countGood > 0) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}

console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
