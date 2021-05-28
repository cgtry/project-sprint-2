console.log("2.JS");

function changeColor() {
    console.log("I will change the color!!");

    let x = document.querySelector("#id2");
    x.style.color="white";
    x.style.backgroundColor = "tomato"
}


function changeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorCode = `rgb(${r}, ${g}, ${b})`;

    let x = document.querySelector("#id3");
    x.style.color=colorCode;
}