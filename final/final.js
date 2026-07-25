//Michaela Harding 7/21/2026
//Welcome to my Website Theme Builder project! This is a fun little exercise about creating a quiz where a user can select their preferred choices, and then those choices are applied to the preview section to let them see what their website would look like.

"use strict";

//QUIZ SECTION
//declare object for storing user choices
let userSelection = {
    primaryColor: undefined,
    secondaryColor: undefined,
    colorString: undefined,
    font: undefined,
    fontString: undefined,
    style: undefined,
    styleString: undefined,
    image: undefined,
    imageStyle: undefined,
    imageString: undefined,
};

const quizSection = document.querySelector('#theme-quiz');

//Add a function that moves the user forward once they select an answer, by adding/removing a class that has the display of block
let questionNumber = 1;

function nextQuestion() {
    document.getElementById('question' + questionNumber).classList.remove('current');
    if (questionNumber < 4) {
        questionNumber++;
    }
    //showBackButton();
    document.getElementById('question' + questionNumber).classList.add('current');
}

//COLOR QUESTION 1
//declare color buttons by ID
const blueBtn = document.querySelector('#blue-btn');
const redBtn = document.querySelector('#red-btn');
const yellowBtn = document.querySelector('#yellow-btn');
const purpleBtn = document.querySelector('#purple-btn');
const monochromeBtn = document.querySelector('#monochrome-btn');

//color button function to store color hexcodes based on their selected button
function clickColor(event) {
    const chosenColor = event.currentTarget;
    if (chosenColor.id === "blue-btn") {
        userSelection.primaryColor = "#09063d";
        userSelection.secondaryColor = "#d0e0fa";
        userSelection.colorString = "Blues and grays";
    } else if (chosenColor.id === "red-btn") {
        userSelection.primaryColor = "#440808";
        userSelection.secondaryColor = "#fde9e2";
        userSelection.colorString = "Reds and browns";
    } else if (chosenColor.id === "yellow-btn") {
        userSelection.primaryColor = "#33581b";
        userSelection.secondaryColor = "#fff8b7";
        userSelection.colorString = "Yellows and greens";
    } else if (chosenColor.id === "purple-btn") {
        userSelection.primaryColor = "#5E406C";
        userSelection.secondaryColor = "#F3B0D3";
        userSelection.colorString = "Purples and pinks";
    } else if (chosenColor.id === "monochrome-btn") {
        userSelection.primaryColor = "#18171c";
        userSelection.secondaryColor = "#f8f6f6";
        userSelection.colorString = "Blacks and whites";
    }

    nextQuestion();
}

//color button event listeners
blueBtn.addEventListener("click", clickColor);
redBtn.addEventListener("click", clickColor);
yellowBtn.addEventListener("click", clickColor);
purpleBtn.addEventListener("click", clickColor);
monochromeBtn.addEventListener("click", clickColor);

//FONT QUESTION 2
//declare font buttons by ID
const businessBtn = document.querySelector('#business-btn');
const traditionalBtn = document.querySelector('#traditional-btn');
const handwrittenBtn = document.querySelector('#handwritten-btn');
const elegantBtn = document.querySelector('#elegant-btn');
const strikingBtn = document.querySelector('#striking-btn');
const roboticBtn = document.querySelector('#robotic-btn');

//font button event handler to store a font family based on their selected button
function clickFont(event) {
    const chosenFont = event.currentTarget;
    if (chosenFont.id === "business-btn") {
        userSelection.font = "Lucida Grande";
    } else if (chosenFont.id === "traditional-btn") {
        userSelection.font = "Georgia";
    } else if (chosenFont.id === "handwritten-btn") {
        userSelection.font = "Shadows Into Light";
    } else if (chosenFont.id === "elegant-btn") {
        userSelection.font = "Sorts Mill Goudy";
    } else if (chosenFont.id === "striking-btn") {
        userSelection.font = "Impact";
    } else if (chosenFont.id === "robotic-btn") {
        userSelection.font = "Courier New";
    }
    //take ID and remove -btn and capitalize the first letter to output to the user
    const shortFont = chosenFont.id.replace("-btn", "");
    const capitalFont = shortFont.charAt(0).toUpperCase() + shortFont.slice(1);
    userSelection.fontString = capitalFont;
    nextQuestion();
}

//font button event listeners
businessBtn.addEventListener("click", clickFont);
traditionalBtn.addEventListener("click", clickFont);
handwrittenBtn.addEventListener("click", clickFont);
elegantBtn.addEventListener("click", clickFont);
strikingBtn.addEventListener("click", clickFont);
roboticBtn.addEventListener("click", clickFont);

//STYLE QUESTION 3
//declare style buttons by ID
const roundBtn = document.querySelector('#round-btn');
const angularBtn = document.querySelector('#angular-btn');
const organicBtn = document.querySelector('#organic-btn');
const minimalBtn = document.querySelector('#minimal-btn');

//style button function to store the user's style
function clickStyle(event) {
    const chosenStyle = event.currentTarget;
    userSelection.style = chosenStyle.id;

    //take ID and remove -btn and capitalize the first letter to output to the user
    const shortStyle = chosenStyle.id.replace("-btn", "");
    const capitalStyle = shortStyle.charAt(0).toUpperCase() + shortStyle.slice(1);
    userSelection.styleString = capitalStyle;
    nextQuestion();
}

//style button event listeners
roundBtn.addEventListener("click", clickStyle);
angularBtn.addEventListener("click", clickStyle);
organicBtn.addEventListener("click", clickStyle);
minimalBtn.addEventListener("click", clickStyle);

//IMAGE QUESTION 4
//declare image buttons by ID
const noirBtn = document.querySelector('#noir-btn');
const vibrantBtn = document.querySelector('#vibrant-btn');
const pastelBtn = document.querySelector('#pastel-btn');
const contrastBtn = document.querySelector('#contrast-btn');
const vintageBtn = document.querySelector('#vintage-btn');
const artisticBtn = document.querySelector('#artistic-btn');

//image button function to store the selected image
function clickImage(event) {
    const chosenImage = event.currentTarget;
    userSelection.imageStyle = chosenImage.id;

    //outputting string based on chosen image
    if (chosenImage.id === "noir-btn") {
        userSelection.imageString = "Noir & monochrome";
    } else if (chosenImage.id === "vibrant-btn") {
        userSelection.imageString = "Vibrant & saturated";
    } else if (chosenImage.id === "pastel-btn") {
        userSelection.imageString = "Muted & pastel";
    } else if (chosenImage.id === "contrast-btn") {
        userSelection.imageString = "Contrasting & dramatic";
    } else if (chosenImage.id === "vintage-btn") {
        userSelection.imageString = "Vintage & retro";
    } else if (chosenImage.id === "artistic-btn") {
        userSelection.imageString = "Artistic & composite";
    }

    //replacing example image src with chosenImage's src
    const imgExample = chosenImage.querySelector('img');
    userSelection.image = imgExample.src;
    alert("Generating your theme...");
    outputTheme();
}

//image button event listeners
noirBtn.addEventListener("click", clickImage);
vibrantBtn.addEventListener("click", clickImage);
pastelBtn.addEventListener("click", clickImage);
contrastBtn.addEventListener("click", clickImage);
vintageBtn.addEventListener("click", clickImage);
artisticBtn.addEventListener("click", clickImage);

//THEME GENERATOR SECTION
//declare example variables to generate a preview of the user's theme
const example = document.querySelector('#example');
const results = document.querySelector('#results');
const fontExample = document.querySelectorAll('.example-font');
const colorText = document.querySelector('#color-text');
const fontText = document.querySelector('#font-text');
const styleText = document.querySelector('#style-text');
const imageText = document.querySelector('#image-text');
const imageExample = document.querySelector('#example-image');
const exampleBtn = document.querySelector('#example-button');
const imageCredits = document.querySelector('.image-credits');

//function for outputting user's theme onto the webpage
function outputTheme() {
    quizSection.style.display = 'none';
    results.style.display = 'block';
    imageCredits.style.display = 'block';

    //adding strings to display the user what their style is
    colorText.textContent = userSelection.colorString;
    fontText.textContent = userSelection.fontString;
    styleText.textContent = userSelection.styleString;
    imageText.textContent = userSelection.imageString;

    //changing font color and background color to selected styles
    example.style.backgroundColor = userSelection.primaryColor;
    example.style.color = userSelection.secondaryColor;

    //changing results container borders to chosen style
    example.classList.add(userSelection.style);
    example.style.borderColor = userSelection.secondaryColor;

    //changing each of the fonts to the selected font
    for (let i = 0; i < fontExample.length; i++) {
        fontExample[i].style.fontFamily = userSelection.font;
    }

    //changing image to selected image and styles
    imageExample.src = userSelection.image;
    imageExample.classList.add(userSelection.style);
    imageExample.style.borderColor = userSelection.primaryColor;

    //changing button to selected font and styles
    exampleBtn.classList.add(userSelection.style);
    exampleBtn.style.backgroundColor = userSelection.secondaryColor;
    exampleBtn.style.borderColor = userSelection.primaryColor;
    exampleBtn.style.color = userSelection.primaryColor;
    exampleBtn.style.fontFamily = userSelection.font;
}

/*I chose this project because I thought it would be a great way to experiment with Javascript interacting with and changing the styles of a webpage in real time. I began with the outline of the HTML - header, quiz section, and results - and mapping out the 4 questions I wanted the user to answer and their options. Then, I planned for a way to store each of these options within an object, and planned how Javascript would listen for each of their selections and store those selections into the object. At the end, the quiz would generate its preview sections using the stored selections from the object. 
This was a fun project to test different website styles since I work in website marketing. In order to meet the final deadline, I didn't flesh this out or make it as visually appealing as I would like, but I plan to continue developing this project to make it pretty and test my skills.
*/