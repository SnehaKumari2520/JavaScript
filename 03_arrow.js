// const user ={
//     username: "hitesh",
//     price : 299,

//     welcomeMessage : function(){
//         console.log(`Welcome ${this.username} to our website`);  
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username ="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.usename);
// }
const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

//chai()


////+++++++++++++++++++++Arrow Functions++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"hitesh"})
console.log(addTwo(5, 8))