"use strict";

console.log(
  "Hello, World! sounds like shit, so i wanna print: Hello, suckers!"
);

var noUse = "it's var";
console.warn(`You shouldn't use VAR to declare a variable`);

let canUseIt = 131;
canUseIt++;
--canUseIt;

const SURELY_USE_IT = true;

let isNull = null;

let isUndefind = undefined;

let hugeNum = BigInt("0x1fffffffffffff");

function coolFunct() {
  return console.error("no no im from EnGlAnd!!");
}
coolFunct();

const COOL_ARRAY = ["skull", "bones"];

const COOL_OBJECT = {
  name: "Kail",
  age: 20,
};

//------------------------------------------------------------------------------------------------

const NUM_1 = 102;

const NUM_2 = 47;

let add = NUM_1 + NUM_2;
console.log(add);

let sub = NUM_1 - NUM_2;
console.log(sub);

let mult = NUM_1 * NUM_2;
console.log(mult);

let division = NUM_1 / NUM_2;
console.log(division);

let exponent = NUM_1 ** 4;
console.log(exponent);

let remainder = NUM_1 % NUM_2;
console.log(remainder);

//------------------------------------------------------------------------------------------------

const showGreeting = () => {
  const text = "yeah, it's me!";
  console.log(text);
};
showGreeting();

const noop = () => {
  // Тут мог бы быть код, но его нет
};

noop();

const getLastChar = (str) => {
  return str[str.length - 1];
};

console.log(getLastChar(noUse));

console.log(noUse.replace("var", "let"));

//------------------------------------------------------------------------------------------------

let maxWidth = "1200px";

const getNumWithoutStr = (str) => {
  return parseFloat(str);
};
console.log(getNumWithoutStr(maxWidth));

const replace = (text, from, to) => {
  return text.replace(from, to);
};

console.log(replace("google", "go", "mo"));

//------------------------------------------------------------------------------------------------

const truncate = (text, length) => {
  return text.slice(0, length) + "...";
};

//------------------------------------------------------------------------------------------------

console.log(
  truncate(
    "Hello, World! sounds like shit, so i wanna print: Hello, suckers!",
    13
  )
);

const getHiddenCard = (card, num = 4) => {
  let slicerCard = card.slice(12);
  let hiddenCard = "*".repeat(num) + slicerCard;
  return hiddenCard;
};
console.log(getHiddenCard("1234567812345678", 2));

const arrowGetHiddenCard = (card, num = 4) => "*".repeat(num) + card.slice(12);
console.log(arrowGetHiddenCard("1234567812345678", 2));

const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
console.log(capitalize("hello"));
//--------------------------------------------------------------------------------

const isStrongPassword = (password) => {
  const length = password.length;
  return length >= 8 && length <= 20;
};
console.log(isStrongPassword("qwerty24"));

const getLetter = (str, value) => {
  if (str[value - 1]) {
    return str[value - 1];
  } else if (str[value - 1] === undefined) {
    return "";
  }
};
console.log(getLetter("Backspace", 2));

function normalizeUrl(adress) {
  if (adress.startsWith("https://")) {
    return adress;
  } else return "https://" + adress;
}
console.log(normalizeUrl("google.com"));

function convertText(str) {
  //  (str[0] === str[0].toUpperCase()) ? str : str.split('').reverse().join('');
  if (str === "") {
    return "";
  } else if (str[0] !== str[0].toUpperCase()) {
    return str.split("").reverse().join("");
  } else return str;
}
console.log(convertText("hello"));

//-------------------------------------------------------------------
const speedCar = (num) => {
  let speed;

  switch (num) {
    case 1:
      speed = 20;
      break;
    case 2:
      speed = 40;
      break;
    case 3:
      speed = 80;
      break;
    case 4:
      speed = 120;
      break;
    case 5:
      speed = 160;
      break;

    default:
      speed = 0;
  }
  return speed;
};
console.log(speedCar(3));

const printNumbers = (initialNumber) => {
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i--;
  }
  console.log("finished!");
};
printNumbers(5);

//--------------------------------------------------------------
const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let multiply = 1;
  while (i <= finish) {
    multiply *= i;
    i += 1;
  }
  return multiply;
};
console.log(multiplyNumbersFromRange(3, 5));
//----------------------------------------------------------------
const joinNumbersFromRange = (first, finish) => {
  let i = first;
  let str = "";
  while (i <= finish) {
    str += i;
    i++;
  }
  return str;
};
console.log(joinNumbersFromRange(3, 10));
//-----------------------------------------------------------------
const mySubstr = (str, lenght) => {
  let i = 0;
  let result = "";
  while (i < lenght) {
    result += str[i];
    i++;
  }
  return result;
};
console.log(mySubstr("text24124", 1));

function countChars(str, char) {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (char === str[i].toUpperCase() || char === str[i].toLowerCase()) {
      count += 1;
    }
    i++;
  }
  return count;
}
console.log(countChars("text", "t"));

const str = "HELLO";
let result = "";
let i = 0;
while (i < str.length) {
  const current = str[i];
  ++i;
  result = `${result}${current.toLowerCase()}`;
  i++;
}
// --------------------------------------------------------------------------
const makeItFunny = (str, num) => {
  let i = 0;
  let result = "";
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % num === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }
  return result;
};
console.log(makeItFunny("I never look back", 3));
// ᓚᘏᗢ--------------------------------------------------------------------------
function compareRegister(a, b) {
  if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
    return 1;
  } else if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1;
  } else if (a.match(/[A-Z]/) && b.match(/[a-z]/)) {
    return 0;
  } else if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
    return 0;
  } else return -1;
}
console.log(compareRegister(":", "A"));
//--------------------------------------------------------------------------------------
const encrypt = (str) =>{
  let result = '';
  for(let i = 0; i < str.length; i += 2 ){
    let currentChar = str[i + 1] || '';
    result += `${currentChar}${str[i]}`;
  }
  return result;
}
console.log(encrypt("attack"));
//---------REVERSERS---------------------------------------------------------------------
const reverseInt = (num) =>{
  let numToString = String(num);
  return numToString.split('').reverse().join('')
}
console.log(reverseInt(12344567));

function niceReverse (value) {
  var toString = String(value);
  for (var i = toString.length - 1, result = ''; i >= 0; result += toString[i--]) { }
  return toString;
  }
console.log(niceReverse(1316904));
//-----------------------------------------------------------------------------------------