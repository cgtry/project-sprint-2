const registerEmployee = () => {
    console.log("regiser");

    const usernameRef = document.querySelector("#username");
    const passwordRef = document.querySelector("#password");
    const emailRef = document.querySelector("#email");
    const mobileRef = document.querySelector("#mobile");

    console.log(usernameRef.value);

    const templateString = `
        <div style="font-size: large;">
            <span>${usernameRef.value}</span>
            <span>${passwordRef.value}</span>
            <span>${emailRef.value}</span>
            <span>${mobileRef.value}</span>
            <span style="margin-left: 16px; cursor: pointer;">&#10060;</span>
        </div>
    `;


    // DYNAMIC OBJECT
    let dynamicElement = document.createElement("template");
    dynamicElement.innerHTML = templateString;


    // PARENT
    let parent = document.querySelector("#parent");
    parent.insertBefore(dynamicElement.content, parent.firstChild);

    const formRef = document.querySelector("#form");
    formRef.reset();
}