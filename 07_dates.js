//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-25-2025")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(myDate.getDate());
console.log(myDate.getMonth()+1);
console.log(myDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})