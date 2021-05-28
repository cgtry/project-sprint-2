// 1. Simplest Object
let obj1 = {};
console.log(obj1);

let obj2 = {id:1, username:"rohit", email:"rohit@gmail.com", mobile:"1122334455"};
let obj3 = {id:2, username:'rahul', email:'rahul@gmail.com', mobile:'1122334455'};
console.log(obj2.username);
console.log(obj3.email);

// Object with One member
let obj4 = {id:3};

// Add New Member / Update Existign Member
obj4.username = "virat";
obj4["email"] = "virat@gmail.com";
// obj4.first-anniversary = "Jan";
obj4["first-annivesary"] = "JAN"

console.log(obj4);