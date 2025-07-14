
/*let marks = [85,97,44,37,54,60];

let sum =0;

for (let val of marks) {

    sum += val;
    
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

let items =[250,649,567,934,455];

let idx = 0;
for (let val of items){

    
    let offer = val/10;
    items[idx]= items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}

let items =[250,649,567,934,455];
for(let i =0; i< items.length ; i++){

    let offer = items[i]/10;
     items[i] -= offer;
}  

console.log(items);

let foodItems =["tomato","potato","banana","chips", "biscuit"];


foodItems.pop();

console.log(foodItems);


let foodItems = ["potato", "apple", "litchi" , "tomato"];

console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);

let fullName  = prompt("enter your fullname without space");
let userName = ("@"+ fullName+ fullName.length);


console.log(fullName);
console.log(userName);


let cities = ["delhi " ," mumbai" , "kolkata","dhanbad"];
for (let city of cities){

    console.log(city.toUpperCase());

}

let marks =["69", "97","85", "93", "86"];
let sum =0 ;

for(let val of marks){
    sum += val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

let items =[250,649,567,934,455];

let idx = 0;
for (let val of items){

    
    let offer = val/10;
    items[idx]= items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}

let items =[250,649,567,934,455];
for(let i = 0; i< items.length ; i++){

    let offer = items[i]/10;
     items[i] -= offer;
}  

console.log(items);

let foodItems = ["potato", "apple", "litchi" , "tomato"];

console.log(foodItems);

let foodItems = ["potato", "apple", "litchi" , "tomato"];
let items =[250,649,567,934,455];

let alltogether =  foodItems.concat(items);
console.log(alltogether);

console.log("hello");

"abc".toUpperCase()


[1,2,3].push(4);

//function ->   2 numbers, sum

function sum(x,y){

    s=x+y;
    return s;

   

}
let val =sum(3,4);
console.log(val);
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"


function sum(x, y) {
    s = x+y;
    return s;
}

let val = sum(3 ,4);
console.log(val);

//arrow function => 
function sum (a,b){

    return a+b ;
}

 const arrowSum=(a,b) => {

    console.log(a+b);

};

function mul(a ,b){
    return a*b;
}



const countvow=(str)=>{
    
    let count = 0;
    for(const char of str){
        if(char==="a"||char ==="e"||char==="i"||char ==="o"||char==="u"){
            count++;
        } 
    }
    console.log(count);
    return count;

}


let arr =["rdsrgdr","sdrvgergst","drtde","dgnkfjvgtsheku"];

arr.forEach((val , idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

let nums =[1,2,45,675,57];
nums.forEach((num) => {
    console.log(num*num);
})*/

//Starter Code

//console.log("hello, people!!");
// document.getElementById("heading");

// console.dir(heading);

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";

// div.style.fontSize = "26px"

// div.innerText = 'hello!!';

// let newBtn = document.createElement("button");
// newBtn.innerText= "click me!";

// console.log(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML= "<i> Hi!, I am new here!</i>";

// document.querySelector("body").prepend(newHeading);
let newBtn = document.createElement("button");
newBtn.innerText ="click me!";

newBtn.style.color ="white";
newBtn.style.backgroundColor="red";
document.querySelecter("body").prepend(newBtn);
 