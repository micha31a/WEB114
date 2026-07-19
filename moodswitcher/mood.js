//Michaela Harding 7/19/2026

"use strict";

//select mood display element
//select buttons container
//select moodHeading

const moodDisplay = document.querySelector("#mood-display");
const buttons = document.querySelector("#mood-section");
const moodHeading = document.querySelector("#mood-heading");

//create object for 4 moods
const moods = {
    happy: {
        name: "Happy",
        bg: '#FFD700',
        text: '#bd26b0',
        message: `Warm smiles and bright skies!`
    },
    calm: {
        name: "Calm",
        bg: '#00bfff',
        text: '#2a1681',
        message: `Relaxed and quiet.`
    },
    angry: {
        name: "Angry",
        bg: '#ff8800',
        text: '#a00e0e',
        message: `Red hot and full of fury!`
    },
    sleepy: {
        name: "Sleepy",
        bg: '#391c5a',
        text: '#95c1ff',
        message: `Now it's time to go to sleep...`
    }
}

//functions to change styling  and content of page
function changeMood(moodName) {
    const mood = moods[moodName];
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    moodDisplay.textContent = mood.message;
    moodHeading.textContent = mood.name;
    document.title = mood.name;
}

//event handlers
function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

//event listeners
const happyBtn = document.querySelector("#happy-btn");
const calmBtn = document.querySelector("#calm-btn");
const angryBtn = document.querySelector("#angry-btn");
const sleepyBtn = document.querySelector("#sleepy-btn");

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);