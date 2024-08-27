"use strict";

console.log(
  "Hello, World! sounds like shit, so i wanna print: Hello, Geeks!"
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

const userFullName = prompt("Enter your First and Second name");

const obj = new Object();

const doArrFromStr = (arr) => {
  return arr.split(" ");
};

obj.firstName = doArrFromStr(userFullName)[0];
obj.secondName = doArrFromStr(userFullName)[1];

function sayHi() {
  return alert(`Hi ${obj.firstName} ${obj.secondName}!`);
}

sayHi();

const celsTemp = prompt("How many digrees Celsius");

function translateCels(cels) {
  return (cels * 9) / 5 + 32;
};

function answerCels() {
  return alert(`${celsTemp} degrees Celsius equal ${translateCels(celsTemp)} degrees Fahrenheit`);
}
answerCels()

const xNum = Number(prompt('enter variable "X" '));

const solve = (x) => {
  let y = 0;
  return y = (4 * x ** 2 + 18 - 23 * x) / ((5 / 9) * x + 18 * ((x **  3 / 33) * x)) + ((x * 15) / 12);
};
alert(solve(xNum));

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b ==='string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
let RENT = 40000
let FOOD = 15000
let OTHER = 15000
let MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')

const catheterA = 24;
const catheterB = 18;
const HypotenuseC = 30;

function isTriangle(a, b, c) {
  if (a ** 2 + b ** 2 !== c ** 2) {
    return "Это не прямоугольный треугольник!";
  } else {return "Это прямоугольный треугольник!"};
}
console.log(isTriangle(catheterA, catheterB, HypotenuseC));

const num1 = 10;
const num2 = 33;
const num3 = 2;

function maxNum(a, b, c) {
    Math.max(a, b, c);
};

const userNum = 11;

function isOddOrEven(num) {
    if(num % 2 === 0){
        return `Number ${num} is even.`
    }return `Number ${num} is odd.`
}
console.log(isOddOrEven(userNum));

function oddAndEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0 && i <= end / 2) {
      console.log(i);
    } else if (i % 2 === 0 && i >= end / 2) {
      console.log(i);
    }
  }
}
console.log(oddAndEven(0, 10));

let userNums;

let result1 = 0;
while (userNums != 0) {
  userNums = +prompt("Your num", 0);
  result1 += parseInt(userNums);
}
alert(result1);

let neededNum = 10;
let currentNum = 0;

do {  
    while (currentNum != neededNum) {  
        currentNum = +prompt('Введите ' + neededNum);  
    }  
    neededNum *= 2;  
} while (currentNum < 100);  
alert('Спасибо!');

function countDown(n) {
    for(let i = n; i > 0; i--){
        console.log(i);
        
    }
}
countDown(10)

function getPercents(percents, number) {
    return (percents * number / 100)
}
console.log(getPercents(30, 200));

function repeatWord(word, count) {
    let i = 1;
    let result = '';
    while(i <= count){
        result += `${word}${i}, `;
        i++
    }
    result = result.split('');
    result.splice((result.length - 2), 1)
    result = result.join('');
    return  result
}
console.log(repeatWord('laptop', 3))

function createAdder(a) {
  return function addA(b) {
    return  a + b;
  } 
}

const add5 = createAdder(5);
console.log( add5(5) ) // Должно получиться 10
console.log( add5(12) ) // Должно получиться 17

function getMonth(n) {
    const arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return arr[n - 1] || 'ошибка'
}

console.log(getMonth(12))