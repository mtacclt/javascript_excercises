let params = new URLSearchParams(window.location.search)
let paramsArray = [];
for (let p of params) {
  paramsArray.push(p[1]);
}

resultJSON = JSON.stringify({
    firstname: paramsArray[0],
    lastname: paramsArray[1],
email: paramsArray[2],
dob: paramsArray[3],
age: paramsArray[4],
designation: paramsArray[5],
address: paramsArray[6]})

console.log(resultJSON);

resultJSON = JSON.parse(resultJSON);

let{firstname,lastname,email,dob,age,designation,address} = resultJSON;

console.log(firstname);

let mergedObject = {...resultJSON,state: "teststate",country:"testcountry",pincode:"123123"}

console.log(mergedObject);

document.getElementById("jsonD").innerHTML = JSON.stringify(mergedObject,null,'\n');

// let 
// console.log(paramsJSON);