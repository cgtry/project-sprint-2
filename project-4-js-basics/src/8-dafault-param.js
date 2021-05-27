
function sayHello(name="morning") {
    // return "Helllo " + name;
    return `Hello ${name}`;
}

let output1 = sayHello();
let output2 = sayHello("rohit");

console.log(output1, output2);