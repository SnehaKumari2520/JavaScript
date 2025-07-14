const marvelCharacters = ["thor","iron","captain america","hulk","black widow","hawkeye"];
const dcCharacters = ["superman","batmann"];

// marvelCharacters.push(dcCharacters)

// console.log(marvelCharacters); // ["thor", "iron", "captain america", "hulk", "black widow", "hawkeye", ["superman", "batmann"]]
//  marvelCharacters.concat(dcCharacters);

// console.log(marvelCharacters); // ["thor", "iron", "captain america", "hulk", "black widow", "hawkeye", ["superman", "batmann"]]

// const allCharacters = [...marvelCharacters, ...dcCharacters];

// console.log(allCharacters); // ["thor", "iron", "captain america", "hulk", "black widow", "hawkeye", "superman", "batmann"]

// const anotherArray = [1,2,3,4,5, [87,34,64,23,45], 6,[7,8,9, [10,11,12]]];
// const real_another_array = anotherArray.flat();

// console.log(real_another_array); // [1, 2, 3, 4, 5, 87, 34, 64, 23, 45, 6, 7, 8, 9]

console.log(Array. isArray("snaha"))

console.log(Array.from("snaha"))
console.log(Array.from({name:"snaha"}))

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]