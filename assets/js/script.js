document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

 

function handleForm(event) {
    event.preventDefault();
    let form = event.target;
    let input = form.userValue.value;
    console.log(input);
    
    // IF STARTING FROM A ROMAN NUMERAL
    // Check first if number submitted is legit
    input = input.toUpperCase();


    if (checkInput(input) == 0) {
        console.log("Yeah!");
        userOutput = returnArabic(input);
    } else {
        alert(`EHEU! \n   All roads lead to Rome but not to this answer! \n   ${input} is not recognised as a valid Roman numeral.`); 
        userOutput = "";
    }
    

    // // IF STARTING FROM AN ARABIC NUMBER
    // if (input >= 4000 || input <=0) {
    //     if (input >= 4000) {
    //         alert(`EHEU! \n   All roads lead to Rome but not to this answer! \n   ${input} is too high, try a value striclty under 4,000.`)
    //     } else {
    //         alert(`EHEU! \n   All roads lead to Rome but not to this answer! \n   Romans do not deal in null or negative numbers.`)
    //     }
    // }
    
    // let userOutput = returnRoman(input);



    // VALUE RETURNED TO THE DOM
    let result = document.getElementById("userOutput");
    result.innerText = userOutput;
}

/**
 * This function returns the Arabic number equivalent of a 
 * Roman numeral
 * input = user input after check
 */
function returnArabic(input) {
    romanStock = ["I", "V", "X", "L", "C", "D", "M"];
    romanValue = [1, 5, 10, 50, 100, 500, 1000];
    arabicValue = 0;
    previousValue = 0;
    
    for (i = 0; i < input.length; i++) {
        
        for (j=0; j < romanStock.length; j++) {
            if (input[i] == romanStock[j]) {
                
                if (i > 0) {
                    console.log(`We are in ${i} for ${j}`);
                    console.log(`Prev is ${previousValue} while current is ${romanValue[j]}`);
                    if (previousValue < romanValue[j]) {
                        console.log(`going backwards`);
                        arabicValue = arabicValue + romanValue[j] - previousValue;
                    } else {
                        arabicValue = arabicValue + romanValue[j];
                    }
                } 
                previousValue = romanValue[j];
            }
        }
        console.log(arabicValue);
    }
    return userOutput;
}


function checkInput(input) {
    trueStock = ["I", "V", "X", "L", "C", "D", "M"];
    checkStack = 0;

    for (let i = 0; i < input.length;  i++) {
        checkStep = trueStock.includes(input[i]);
    
        if (checkStep === false) {
            checkStack = checkStack + 1;
        } else {checkStack = checkStack + 0}
        console.log(checkStack);
    }
    return checkStack;
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