function createTweet() {
    // User writes th tweet here. :: its a form element
    let tidRef =  document.querySelector("#tid");

    // Create Dynamic Object 
    let newObject = document.createElement('div');
    newObject.innerHTML = tidRef.value;
    newObject.style.color = randomColor();

    // Appending the child to parent
    let parent = document.querySelector('#container');
    parent.insertBefore(newObject, parent.children[2]);

    tidRef.value = "";
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorCode = `rgb(${r}, ${g}, ${b})`;
    return colorCode;
}

function createTweetV3() {
    // User writes th tweet here.
    let tidRef =  document.querySelector("#tid");

    // Create Dynamic Object 
    let newObject = document.createElement('div');
    newObject.innerHTML = tidRef.value;

    // Appending the child to parent
    let parent = document.querySelector('#container');
    parent.insertBefore(newObject, parent.children[2]);

    tidRef.value = "";
}


function createTweetV2() {
    // User writes th tweet here.
    let tidRef =  document.querySelector("#tid");

    // Create Dynamic Object 
    let newObject = document.createElement('div');
    newObject.innerHTML = tidRef.value;

    // Appending the child to parent
    let parent = document.querySelector('#container');
    parent.appendChild(newObject);

    tidRef.value = "";
}


function createTweetV1() {
    let tidRef =  document.querySelector("#tid");
    console.log(tidRef.value);

    tidRef.value = "";
}