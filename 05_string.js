//primitive types
//7 types of primitive types

// string,number,boolean,null,undefined,symbol,bigint

//non-primitive types/Reference types
// 3 types of non-primitive types
//object,array,function

// const score = 100;
// const scoreValue = "100";

// const isLoggedIn = true
// const outsideTemp = null

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); // false, because symbols are unique

// const bigNumber = 1234567890123456789012345678901234567890n; // bigint

const name = "Sneha Kumar"
const repoCount = 1000

console.log(typeof name); // string
console.log(typeof score); // number
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // template literals

const gameName = new String('call of Duty');
console.log(gameName[0]); 
console.log(gameName.__proto__); // C
console.log(gameName.length); // 14
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0)); // C
console.log(gameName.indexOf('Duty'));

const newString = gameName.replace('Duty', 'Warzone');
console.log(newString); // call of Warzone

const newString2 = gameName.slice(-3, 4);
console.log(newString2); // of D

const newString3 = gameName.substring(0, 4);
console.log(newString3); // call