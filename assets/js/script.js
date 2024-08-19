console.log(`Hello there`);


// let userInput = parseInt(document.getElementById("input-value").value);

//const userInput = document.getElementById("input-value").value;

let userInput = 1234;               console.log(userInput);

let tempInput = userInput.toString(10);

let inputLength = tempInput.length; console.log(inputLength);


console.log(typeof userInput);

myType = typeof(Number(userInput));
console.log(myType);

if (myType === "number") {
    console.log("Arabic number detected!");
    console.log(userInput);
} else {
    console.log("Roman numeral detected");
}



// if (Number.isInteger(userInput)){
//     console.log("Arabic integer number detected");
// }


// console.log(isNumeric(userInput));


// function isNumeric(value) {
//     return !isNaN(parseInt(value));
// }