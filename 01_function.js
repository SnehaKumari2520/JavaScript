function sayMyname(name) {
    console.log("My name is ");
    console.log("s");
    console.log("n");
}

// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2;
//     // return result; // Return the result of the addition  
//     return number1+number2
// }


// const result = addTwoNumbers(5, 5);
// console.log( "result = " , result); 

// function loginUserMessage(username){
//     if(!username  ) {
//         console.log("please provide a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());

// function calculateCartprice(val1, val2 ,...num1){
//     return num1
// }
// console.log(calculateCartprice(200,400,500))

const user= {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject({
    username:"Sam",
    price:399
})
const myNwArray = [220, 400, 500, 600, 700, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNwArray));