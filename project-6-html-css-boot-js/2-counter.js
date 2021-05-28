const test = () => console.log("I AM TEST FUNCTION");

const like = () => {
    // GET THE OBJECT
    let cidRef = document.querySelector("#cid");

    // GET THE CURRENT VALUE IN STRING
    let currentValueStr = cidRef.innerHTML;

    // CAST THE CURRENT VALUE IN INTERGER
    let currentValue = parseInt(currentValueStr);

    // increment by 1
    currentValue = currentValue + 1;

    // UDPAT THE OBJECT :: with udpated value
    cidRef.innerHTML = currentValue;
}

const likeInReact = ()=> {
    counter = counter + 1;
}


const likeV1 = () => {
    // GET THE OBJECT
    let cidRef = document.querySelector("#cid");

    // UDPAT THE OBJECT
    cidRef.innerHTML = 20000;
}
