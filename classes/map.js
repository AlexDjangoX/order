/* eslint-disable no-extend-native */
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

let names = characters.map((character) => {
  return character.name;
});

console.log("41...", names);

let array = [4, 3, 9, 7, 2, 1];

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot_(array) {
  let newArray = array.map((number) => {
    if (Math.round(Math.sqrt(number)) === Math.sqrt(number)) {
      return Math.sqrt(number);
    } else {
      return number ** 2;
    }
  });

  return newArray;
}

squareOrSquareRoot_(array);

function squareOrSquareRoot(array) {
  return array.map((number) => {
    return Math.round(Math.sqrt(number)) === Math.sqrt(number)
      ? Math.sqrt(number)
      : number ** 2;
  });
}
console.log(squareOrSquareRoot(array));

function squareOrSquareRoot__(array) {
  return array.map((x) => {
    const n = Math.sqrt(x);
    return Number.isInteger(n) ? n : x * x;
  });
}

squareOrSquareRoot__(array);

function makeNegative(num) {
  return num < 0 ? num : -num;
}

function makeNegative_(num) {
  return -Math.abs(num);
}

let haystack = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

function findNeedle(haystack) {
  let indexed;
  haystack.forEach((item, index) => {
    if (item === "needle") indexed = index;
  });
  return indexed;
}

function findNeedle_(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(haystack));

const string = "bitcoin take over the world maybe who knows perhaps";

function findShort(s) {
  let array = s.split(" ");
  array = array.map((e) => e.length);
  return Math.min(...array);
}
findShort(string);

function findShort_(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

function findShort__(s) {
  var arr = s.split(" ");
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

function solution(str, ending) {
  let endingLength = ending.length;
  if (str.slice(-endingLength) === ending || ending === "") return true;
  return false;
}

function solution__(str, ending) {
  return str.endsWith(ending);
}

solution("abcde", "cde");
solution("abcde", "abc");

let str = "The quick brown fox jumps over the lazy dog.";

function reverseWords(str) {
  let string = str.split(" ");
  let array = [];
  for (let j = 0; j < string.length; j++) {
    array.push(string[j].split("").reverse().join(""));
  }
  return array.join(" ");
}
reverseWords(str);

function reverseWords__(str) {
  return str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}

function reverseWords___(string) {
  return string
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .join(" ");
}

function reverseWords_(str) {}

function DNAtoRNA_(dna) {
  return dna.replaceAll("l", "z");
}

console.log(DNAtoRNA_("lllllllllpoiuj"));

function DNAtoRNA(dna) {
  return [...dna]
    .map((letter) => {
      if (letter === "T") {
        letter = "U";
      }

      return letter;
    })
    .join("");
}

console.log(DNAtoRNA("TTTTTTT"));

DNAtoRNA = ($) => [...$].map((el) => (el === "T" ? (el = "U") : el)).join``;

function DNAtoRNA__(dna) {
  return dna.replace(/T/g, "U");
}

function DNAtoRNA___(dna) {
  return dna.split("T").join("U");
}

console.log(DNAtoRNA___("TTTTTTT"));

function sumTwoSmallestNumbers(numbers) {
  let s = Math.min(...numbers);
  let index = numbers.indexOf(s);
  numbers.splice(index, 1);
  let p = Math.min(...numbers);
  return s + p;
}

const numbered = [5, 8, 12, 1, 19, 22, 1];

sumTwoSmallestNumbers(numbered);

function sumTwoSmallestNumbers_(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

const sumTwoSmallestNumbers__ = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);

const numbered_2 = [5, 8, 12, 1, 19, 22, 1];

// 1. returns -ve, x comes first (5 - 8) 5
// 2. returns 0, nothing changes
// 3. returns +ve y comes first (22 - 2) 2

const products = [
  {
    name: "Zlex",
    amount: 2500,
  },
  {
    name: "Django",
    amount: 7600,
  },
];

const x = products.sort((a, b) => {
  return a.amount - b.amount;
});

const y = products.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
});

const wordsArray = ["one", "seventeen", "a", "nbshdyeu", "bdfgh"];

const resultFromSort = wordsArray.sort((a, b) => a.length - b.length);

console.log(resultFromSort);

function squareSum(number) {
  return number.map((num) => num ** 2).reduce((a, b) => a + b, 0);
}

console.log(squareSum([1, 2, 3, 4, 5, 6, 7]));

function check(a, x) {
  return a.includes(x) ? true : false;
}

const myArrayed = ["a", "b", "c", "d", "e", "f", "g"];
const toRemoved = new Set(["b", "c", "g"]);

const difference = myArrayed.filter((x) => !toRemoved.has(x));

console.log(difference); // ["a", "d", "e", "f"]

let myArray = [1, 2, 3, 4];
let toRemove = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2222222, 111111];

toRemove = [...toRemove.join("")];
toRemove = [...new Set(toRemove)]; // returns string not number
toRemove = toRemove.map((el) => {
  return +el;
});

let uniq = myArray.filter((el) => {
  return !toRemove.includes(el);
});

// console.log(uniq);

function unusedDigits(array) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayed = [...array.join("")];
  array = arrayed;

  let uniq = [...new Set(array)].map((el) => {
    return +el;
  });
  return num.filter((el) => {
    return !uniq.includes(el);
  });
}

const unusedDigits_ = (...arr) => {
  var digits = arr.join();

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter((x) => !digits.includes(x))
    .join("");
};

console.log(unusedDigits([1230, 55]));

function invert(array) {
  return array.map((el) => {
    return el > 0 ? -el : el * -1;
  });
}

function countSheep(num) {
  let str = "";
  for (let i = 1; i < num + 1; i++) {
    str += `${i} sheep...`;
  }
  return str;
}
var countSheep_ = function (num) {
  return [...Array(num)].map((v, i) => i + 1 + " sheep...").join("");
};

console.log(countSheep(3));

console.log([...Array(3)].map((v, i) => i + 1 + " sheep...").join(""));

// multi-dimensional arrays

let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

activities.splice(1, 0, ["Write", 2]);

activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = `${percentage}%`;
});

let xcel = activities.pop();
console.log(xcel);

console.table(activities);

// loop the outer array
for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  var innerArrayLength = activities[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    // console.log("[" + i + "," + j + "] = " + activities[i][j]);
  }
}

activities.forEach((activity) => {
  activity.forEach((data) => {
    // console.log(data);
  });
});

let strung = "How can mirrors be real if our eyes aren't real";

Object.defineProperty(String.prototype, "toJadenCase", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

function capFirstLetter(str) {
  return str
    .split(" ")
    .map((el) => {
      return el.toJadenCase();
    })
    .join(" ");
}

console.log(capFirstLetter(strung));

String.prototype.toJadenCase = function () {
  let wordsArray = [];
  let words = this.toLowerCase().split(" ");
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    wordsArray.push(word[0].toUpperCase() + word.slice(1));
  }
  return wordsArray.join(" ");
};

String.prototype.toJadenCase_ = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log("444...", strung.toJadenCase());

String.prototype.toJadenCase___ = function () {
  return this.split(" ")
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join(" ");
};

function openOrSenior_(data) {
  let openSenior = [];
  for (let innerArray of data) {
    if (innerArray[0] >= 55 && innerArray[1] > 7) {
      openSenior.push("Senior");
    } else {
      openSenior.push("Open");
    }
  }
  return openSenior;
}

const inputIntoOpenSenior = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

function openOrSenior__(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

function openOrSenior(data) {
  return data.map((el) => {
    return el[0] >= 55 && el[1] > 7 ? "Senior" : "Open";
  });
}

console.log(openOrSenior(inputIntoOpenSenior));

// r**n = x
// r = x** 1/n

function root(x, n) {
  return x ** (1 / n);
}

function points_(games) {
  let scoreAcuum = 0;
  for (let string of games) {
    console.log(`${+string[0]}:${+string[2]} accum=${scoreAcuum}`);

    let x = +string[0];
    let y = +string[2];
    if (x > y) {
      scoreAcuum += 3;
      continue;
    }
    if (x < y) {
      scoreAcuum += 0;
      continue;
    }
    if ((x = y)) {
      scoreAcuum += 1;
    }
    if (x === 0 && y === 0) scoreAcuum += 1;
  }

  return scoreAcuum;
}

let pointsGame = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

const array12 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array12.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

function points(games) {
  return games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
}

console.log(points(pointsGame));

//creating a function Land()
function Land() {
  this.area = "";
  this.status = "for Sale";
}
//Setting status open for sale
Land.prototype.open = function () {
  this.status = "Open for Sale";
  return this;
};
//Setting status not for sale
Land.prototype.close = function () {
  this.status = "Not for Sale";
  return this;
};
//Setting Parameters
Land.prototype.setParams = function (area) {
  this.area = area;
  return this;
};
//printing land status
Land.prototype.doorStatus = function () {
  console.log("The", this.area, "Land is", this.status);
  return this;
};
//creating a land object
var land = new Land("500009");
console.log(land.status);

land.setParams("500 sq ft").close().doorStatus().open().doorStatus();

function countBy(x, n) {
  let z = [];
  for (let j = 1; j < n + 1; j++) {
    z.push(x * j);
  }

  return z;
}

console.log(countBy(2, 5));

function solution_z(nums) {
  if (nums === [] || nums === null) {
    return [];
  } else {
    nums.sort((a, b) => a - b);
  }
  return nums;
}

function sol(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

function sol_(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

function rowSumOddNumbers(n) {
  return n * n * n;
}
console.log(rowSumOddNumbers(30));

function noSpace(x) {
  return x.split(" ").join("");
}

function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let countArray = [];

  for (let x = 0; x < arr.length; x++) {
    let count = 0;
    for (let y = 0; y < arr[x].length; y++) {
      console.log(alphabet[y]);
      if (arr[x][y].toLowerCase() === alphabet[y]) {
        count += 1;
      }
    }
    countArray.push(count);
  }

  return countArray;
}

console.log("657", solve(["abode", "ABc", "xyzD"]));

function solve_(arr) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(
    (x) =>
      x
        .toLowerCase()
        .split("")
        .filter((y, i) => i === alphabet.indexOf(y)).length
  );
}

function solve__(arr) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return arr.map((x) => {
    return x
      .toLowerCase()
      .split("")
      .filter((letter, index) => {
        return letter === alpha[index];
      }).length;
  });
}

console.log("681", solve__(["abode", "ABc", "xyzD"]));
