const createTweet = () =>  {
    // User writes th tweet here. :: its a form element
    let tidRef =  document.querySelector("#tid");

    if(tidRef.value == "") {
        alert("Blank Validation");
        return;
    }

    // Create Dynamic Object 
    let refBlock = `
        <div style="margin-bottom:1px">
            <span style="margin-right: 100px;">${tidRef.value}</span> 
            <mark>1</mark>  
            <span onclick="like(this)" style="cursor:pointer;">&#128077;</span>
        </div>
    `;

    let newObject = document.createElement('template');
    newObject.innerHTML = refBlock;
    

    // Appending the child to parent
    let parent = document.querySelector('#container');
    parent.insertBefore(newObject.content, parent.children[2]);

    tidRef.value = "";
}


const like = (currentObj) => {
    console.log(currentObj);

    // With the help of current oBject; we are getting the counter object
    let counterObj = currentObj.previousElementSibling
    let counterValueAsStr = counterObj.innerHTML;

    let counterValue = parseInt(counterValueAsStr);

    counterObj.innerHTML = counterValue + 1;
}




const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorCode = `rgb(${r}, ${g}, ${b})`;
    return colorCode;
}