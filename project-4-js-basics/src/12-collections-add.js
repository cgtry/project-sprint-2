// Empty List
let list = [];

// List with Initialization
let list1 = ["Delhi", "Kolkata", "Mumbai", "Chennai"];

// Add New Element :: At the End
list1.push("Pune");

// Add new Element :: At the Begining
list1.unshift("Banglore");


// Add New Element :: At Specific Index ::  In Between :: You must know the index=3
list1.splice(3, 0, "Hyderabad");


// Access an element from  the list;
console.log(list[2]);


console.log(list);
console.log(list1);