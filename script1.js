const ex12Button = document.getElementById("ex12button");
const outputLabel = document.getElementById("nameresult");
const submitButton = document.getElementById("submit");
var clicked =false;

ex12Button.onclick = () => {
    const first = document.getElementById("firstname").value;
    const last = document.getElementById("lastname").value;
    outputLabel.innerHTML = `Name is: ${first} ${last}`;
    clicked = true;
}

outputLabel.onmouseover = () => {
    if (clicked === true){
        outputLabel.style.backgroundColor = 'yellow';
    console.log("mouseover");
    }    
}

outputLabel.onmouseout = () => {
    if (clicked === true){
    outputLabel.style.backgroundColor = 'white';
    console.log("mouseout");
    }
}

submitButton.onclick = () => {
    window.location.href = "www.google.com";
};