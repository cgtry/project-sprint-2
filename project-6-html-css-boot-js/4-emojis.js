const emojiClick = (currentSpanObj, message) => {

    const value = currentSpanObj.innerHTML;

    // NEW DYNAMIC ELMENT
    let dyamicElement = document.createElement('div');
    dyamicElement.innerHTML = `${message} ${value}`;
    dyamicElement.style.fontSize = "xx-large";

    // APPEND TO THE PARENT
    let parent = document.querySelector("#parent");
    parent.insertBefore(dyamicElement, parent.firstChild)
}