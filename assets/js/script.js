
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });


function handleForm(event) {
    let form = event.target;
    let input = form.userValue.value;

    console.log(input);

    let userOutput = returnRoman(input);

    let result = document.getElementById("userOutput");
    result.innerText = userOutput;
}

/**
 * This function returns the Roman numeral equivalent of a 
 * number in Arabic notation, up to 3999
 * input = reversed string of the number submitted by user
 */
function returnRoman(input) {
    let userOutput = "";
    let myString = input.toString(10);
    let myLength = myString.length;

    let myGnirts = myString.split('').reverse().join('');
    console.log(myGnirts);

    for (let i = 0; i <myLength; i++) {
        // console.log("my i");
        // console.log(i);
        userOutput = returnRomanStep(i, myGnirts[i]) + userOutput;
        // console.log(userOutput);
    }
    
    return userOutput;
}
/**
 * This function uses the place value to return 
 * the Roman numeral equivalent
 * place = place value considered (from units to thousands)
 * digit = original number
 */
function returnRomanStep(place, digit) {
    const myOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const myTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const myHuns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const myThou = ["", "M", "MM", "MMM" ];

    if (place === 0) {addPlaceValue = myOnes[digit]; console.log(addPlaceValue);}
    else if (place === 1) {addPlaceValue = myTens[digit]; console.log(addPlaceValue);}
    else if (place === 2) {addPlaceValue = myHuns[digit]; console.log(addPlaceValue);}
    else if (place === 3) {addPlaceValue = myThou[digit]; console.log(addPlaceValue);}

    console.log(addPlaceValue);

    return addPlaceValue;
}