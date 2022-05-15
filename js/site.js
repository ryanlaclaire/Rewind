//Get user input
//Controller Function
function getString() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("revString").value;
    
    let revString = reverseString(userString);
    
    displayString(revString);
}

//Reverse text in array
//Logic Function
function reverseString(userString) {

    let revString = [];

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    return revString;
}

//Display text on page
//Display Function
function displayString(revString) {

    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    document.getElementById("alert").classList.remove("invisible");

}