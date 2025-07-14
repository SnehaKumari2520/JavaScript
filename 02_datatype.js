// "use strict";
// //alert("hello")

// let score = "sneha"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number("score")
// // console.log(typeof valueInNUmber);
// // console.log(valueInNUmber);

// // //"33" => 33
// // //"33abc" => NaN
// // // true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//  let someNumber = 33 
//  let stringNumber = String(someNumber)
//  console.log(stringNumber);

 //primitive

 // 7 type :Sting, Number, Boolean, Null, Undefine, symbol, BigInt


 //const score = 100 . JavaScript is fundamentally a dynamically typed language.

 //Reference type(non primitive)

 //Array, Object, Fuctions
 

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //Stack (Primitive), Heap (Non Primitive)

 let myYoutubeName = "SnehaKumar";
 let anotherYoutube = myYoutubeName 
 anotherYoutube = "chai and code" 

 console.log(myYoutubeName);
 console.log(anotherYoutube);

 let userOne = {
    email: "snehakumari@google.com",
    name: "sneha",
    age : "22" ,
}

let userTwo = userOne

userTwo.email = "sneha@google.com"

console.log(userOne.email);
console.log(userTwo.email);