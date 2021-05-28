let list = ["A", "B", "C", "D", 'E', `F`, "G"];

console.log(list);

// REMOVE FROM THE END
list.pop();
list.pop();

console.log(list);

// REMOVE FROM THE BEGINING
list.shift();

console.log(list);
// AT THIS MOMENT :: ['B', 'C', 'D', 'E']

// REMOVE FROM SPECIFIC INDEX :: FROm INbETWWEN :: index=2
list.splice(2, 1);

console.log(list);