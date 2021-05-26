// Special Focus on String
let firstName = 'malaya';
let middleName = "ranjan";
let lastName = `sahoo`;

// Printing the variables
console.log(firstName);
console.log(middleName);
console.log(lastName);


// concantation
let output1 = firstName + " " + middleName + " " + lastName;
console.log(output1);

// using backtick
let output2 = `${firstName} ${middleName} ${lastName}`;
console.log(output2);

console.log(firstName, middleName, lastName);


// Usage of the backtick
// http://localhost:8080/api/employee?id=1&name=rohit&email=rohit@gmail.com
let id=1;
let name="rohit";
let email = "rohit@gamil.com";
let url = "http://localhost:8080/api/employee?id=" + id + "&name=" + name + "&email=" + email;

let url1 = `http://localhost:8080/api/employee?id=${id}&name=${name}&email=${email}`
console.log(url);
console.log(url1);


// another advantage
let temp1="Hello World"
let temp2=`
        hello world
`