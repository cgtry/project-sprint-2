function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}



function addNew() {
    const rgbCode = randomColor();
    let htmlString = `
        <div style="font-size: 24px; color: ${rgbCode}; background:whitesmoke; margin-bottom:1px">
            Sample Text ${rgbCode} 
        </div>
    `;
    let newElement = document.createElement('template');
    newElement.innerHTML = htmlString;

    const parent = document.querySelector("#id1");
    parent.insertBefore(newElement.content, parent.children[1]);
}