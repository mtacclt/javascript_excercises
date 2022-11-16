const ex12Button = document.getElementById("ex12button");
const outputLabel = document.getElementById("nameresult");
const submitButton = document.getElementById("nextPageButton");
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
    window.location.replace("../javascript_excercises/page2.html");

};


// function sendData(data) {
//     const XHR = new XMLHttpRequest();
//     const FD = new FormData();
  
//     // Push our data into our FormData object
//     for (const [name, value] of Object.entries(data)) {
//       FD.append(name, value);
//     }
  
//     // Define what happens on successful data submission
//     XHR.addEventListener('load', (event) => {
//       alert('Yeah! Data sent and response loaded.');
//     });
  
//     // Define what happens in case of error
//     XHR.addEventListener('error', (event) => {
//       alert('Oops! Something went wrong.');
//     });
  
//     // Set up our request
//     XHR.open('POST', 'https://example.com/cors.php');
  
//     // Send our FormData object; HTTP headers are set automatically
//     XHR.send(FD);
//   }
  
//   btn.addEventListener('click', () => {
//     sendData({ test: 'ok' });
//   });