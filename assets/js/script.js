console.log(`Hello there`);



function handleForm(event) {
    let form = event.target;
    let input = form.userValue.value;

    console.log(input);

    let userOutput = returnRoman(input);

    let result = document.getElementById("userOutput");
    result.innerText = userOutput;
}


function returnRoman(input) {
    let userOutput = "SPQR";
    let myString = input.toString(10);
    let myLength = myString.length;
    // console.log(myLength);

    for (let i=myLength; i>0; i--){
        console.log(i);

    }
    console.log("Done");

    return userOutput;
}
