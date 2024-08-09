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

// ^_^    task 1

// let userNum = +prompt('Please, enter your number.');

// if (!isNaN(userNum)){
//     if(userNum % 2 === 0 ){
//         console.log('Your number is even');
//     }else console.log('Your number is odd')
// }else console.log(`Uppsss, you entered not a number`);

// ᓚᘏᗢ    task 2

let value;

if(typeof value === 'number' && value !== null){
  console.log(`${value} - is number`);
}else if(typeof value === 'string'){
  console.log(`${value} - is string`);
}else if(typeof value === 'boolean'){
  console.log(`${value} - is boolean`);
}else console.log(` Type of '${value}' is not defined`);

// ಠ_ಠ    task 3

let str1 = 'Hello';
let reverseStr = str1.split('').reverse().join('');
console.log(reverseStr);

// (^///^)    task 4

let randomNum =  Math.round(Math.random(0, 100) * 100) ;

console.log(randomNum);

// ( ´･･)ﾉ(._.`)    task 5

let myArray = [101, null, 'honk', 'redhat', true];

console.log(myArray.length);
myArray.forEach((value) => console.log(`with 'forEach': ${value}`));

console.log('😜😜😜')

for(let i = 0; i <= myArray.length; i++){
  console.log(`with 'for': ${myArray[i]}`);
}

// (☞ﾟヮﾟ)☞    task 6

let array = ['skill', 'skill', 'skill', 12, 'skill'];

let result2 = true;
for(let i = 0; i < array.length; i++){
  for(let y = i + 1; y < array.length; y++){
      if (typeof(array[i]) !== typeof(array[y])){
        result2 = false;
      } 
  }
}
console.log(result2);

// (•_•)    task 7

let evenNumArray = ["null", null, 1, 2, 0, 55, 12, 36, 99, 89, 0, 72];

let countEven = 0;
let countOdd = 0;
let countZeros = 0;
for(let i = 0; i < evenNumArray.length; i++){
  if(evenNumArray[i] !== null && evenNumArray[i] % 2 === 0 && evenNumArray[i] !==0){
    countEven += 1
  }else if(evenNumArray[i] % 2 !== 0 && typeof evenNumArray[i] !== 'string'){
    countOdd += 1
  }else if(evenNumArray[i] == 0){
    countZeros += 1;
  }
}
console.log(countEven)
console.log(countOdd)
console.log(countZeros)

//                       (¬_¬ )
// let countEven = 0;
//     let countOdd = 0;
//     let countOther = 0;

//     for (let i = 0; i < arr.length; i++){
//         if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
//             countOther++;
//         } else {
//             if (arr[i] % 2 === 0) {
//                 countEven++;
//             } else {
//                 countOdd++;
//             }
//         }
//     }

// ╰(*°▽°*)╯    task 8

let skillMap = new Map([

  ['name', 'John'],

  ['age', '18'],

  ['height', '178cm'],

  ['weight', '75kg'],

  ['foot-size', '40']
]);
for (let values of skillMap.values()){
  for (let keys of skillMap.keys()){
    console.log(`Key - ${keys}, value - ${values} `);
  }
}

//-------------EE--NN--DD--------------------------------------------------------------------------








let map = new Map();

map.set('key', 'map object');
map.set('door', 'this is');
console.log(map.get('key'));
console.log(map.size);

let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

]);

for (let i of fruits.keys()){
  console.log(i);
}
for (let j of fruits.values()){
  console.log(j);
}
for (let l of fruits){
  console.log(l);
}