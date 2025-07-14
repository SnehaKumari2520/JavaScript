//Singleton
//object literal

const mySymbol = Symbol("mySymbol");
const JsUser ={
    name: "Sneha",
    "fullName": "Sneha Kumari",
    [mySymbol]: Symbol("This is a symbol property"),
    age: 24,
    isActive: true,
    email: "sneha@gmail.com",
    skills: ["HTML", "CSS", "JavaScript"],
    address: "dhanbad",
}
// console.log(JsUser);
// console.log(JsUser.name);

// console.log(JsUser["name"]); // Accessing property using bracket notation
// console.log(JsUser.fullName);
// console.log(JsUser.fullName)// Accessing property using bracket notation
// console.log(JsUser[mySymbol]); 
// console.log(typeof JsUser[mySymbol])// Accessing symbol property
// console.log(typeof mySymbol); // symbol

// JsUser.grettingTWo = function() {

//     console.log("Hello, " + this.name);
// }

// console.log(JsUser.grettingTWo()); 

console.log(Object.keys(JsUser)); // Returns an array of the object's own enumerable property names
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser)); // Returns an array of the object's own enumerable string-keyed property [key, value] pairs
console.log(JsUser.hasOwnProperty('isLoggedIn')); // Returns true if the object has the specified property as its own property