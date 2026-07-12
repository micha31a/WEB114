//Michaela Harding 7/12/2026

"use strict";

let entryCount = 0;
let gasTotal = 0;
let gasAverage;

//Use function to calculate the user's gas totals, nmumber of entries, and the average
function calcGasAvg() {
    let gasEntry = prompt("Enter your first week's gas total. Enter -1 when you are done.");
    if (gasEntry === null) {
        return null;
    }
    let weeklyGas = +gasEntry;

    while (weeklyGas !== -1) {
        if (Number.isNaN(weeklyGas) || gasEntry.trim() === "") {
            alert("Please enter a valid number.");
            gasEntry = prompt("Enter your first week's gas total. Enter -1 when you are done.");
            if (gasEntry === null) {
                return null;
            }
            weeklyGas = +gasEntry;
        } else {
            gasTotal = gasTotal + weeklyGas;
            entryCount++;
            gasEntry = prompt("Enter your next week's gas total. Enter -1 when done.");
            if (gasEntry === null) {
                return null;
            }
            weeklyGas = +gasEntry;
        }
    }
    //Now calculate the average once -1 is entered by the user
    if (entryCount > 0) {
        gasAverage = gasTotal / entryCount;
    } else {
        gasAverage = 0;
    }
    return gasAverage;
}

//Create prompts for the user to begin the gas average calculation activity, starting with their name
let username = prompt("Enter your name:");

if (username === null) {
    alert("You cancelled the name prompt.");
} else if (username.trim() === "") {
    alert("You must type a name.");
} else { //Once name properly entered, use calcGasAvg function and output their name, average gas bill, and number of gas entries
    let average = calcGasAvg();
    if (average === null) {
        alert("You cancelled entering gas totals.");
    } else {
        if (entryCount === 0) {
            alert("No entries entered. Unable to calculate gas average.")
        } else if (entryCount === 1) {
            alert(`${username}'s gas total is ${gasTotal.toFixed(2)}.`);
        } else {
            alert(`${username}'s average weekly gas bill is $${gasAverage.toFixed(2)}.`);
        }
        if (entryCount === 0) {
            alert("No entries entered.")
        } else if (entryCount === 1) {
            alert(`${username} entered $${entryCount} gas total.`);
        } else {
            alert(`${username} entered $${entryCount} gas totals.`);
        }
    }
}