const emoji1 = () => {

    let id1Ref = document.querySelector("#id1");

    const value = id1Ref.innerHTML;

    // NEW DYNAMIC ELMENT
    let dyamicElement = document.createElement('div');
    dyamicElement.innerHTML = `Dishoom ${value}`;
    dyamicElement.style.fontSize = "xx-large";

    // APPEND TO THE PARENT
    let parent = document.querySelector("#parent");
    // parent.appendChild(dyamicElement);
    parent.insertBefore(dyamicElement, parent.firstChild)
}


const emoji2 = () => {

    let id1Ref = document.querySelector("#id2");

    const value = id1Ref.innerHTML;

    // NEW DYNAMIC ELMENT
    let dyamicElement = document.createElement('div');
    dyamicElement.innerHTML = `Thappad ${value}`;
    dyamicElement.style.fontSize = "xx-large";

    // APPEND TO THE PARENT
    let parent = document.querySelector("#parent");
    // parent.appendChild(dyamicElement);

    parent.insertBefore(dyamicElement, parent.firstChild)
}


const emoji3 = () => {

    let id1Ref = document.querySelector("#id3");

    const value = id1Ref.innerHTML;

    // NEW DYNAMIC ELMENT
    let dyamicElement = document.createElement('div');
    dyamicElement.innerHTML = `Superbbb ${value}`;
    dyamicElement.style.fontSize = "xx-large";

    // APPEND TO THE PARENT
    let parent = document.querySelector("#parent");
    // parent.appendChild(dyamicElement);
    parent.insertBefore(dyamicElement, parent.firstChild)
}