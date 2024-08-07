"use strict";

console.log("Hello, World! sounds like shit, so i wanna print: Hello, suckers!")

var noUse = 'it\'s var';
console.warn(`You shouldn't use VAR to declare a variable`);

let canUseIt = 131;
canUseIt++;
--canUseIt;

const SURELY_USE_IT = true;

let isNull = null;

let isUndefind = undefined;

let hugeNum =  BigInt("0x1fffffffffffff");

function coolFunct() {
    return console.error('no no im from EnGlAnd!!')
}
coolFunct();

const COOL_ARRAY = ['skull', 'bones'];

const COOL_OBJECT = {
    name: 'Kail',
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
    const text = 'yeah, it\'s me!';
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

let maxWidth = '1200px';

const getNumWithoutStr = (str) =>{
    return parseFloat(str)
};
console.log(getNumWithoutStr(maxWidth))

const replace = (text, from, to) =>{
    return text.replace(from, to);
}

console.log(replace("google", "go", "mo"));

//------------------------------------------------------------------------------------------------

const truncate = (text, length) =>{
    return text.slice(0, length) + '...';
}

//------------------------------------------------------------------------------------------------

console.log(truncate("Hello, World! sounds like shit, so i wanna print: Hello, suckers!", 13));

const getHiddenCard = (card, num) =>{
    let slicerCard = card.slice(12);
    let hidenCard = '*'.repeat(num) + slicerCard;
    return hidenCard;
}
console.log(getHiddenCard('1234567812345678', 2));
