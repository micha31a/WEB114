"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0 using the variable score

2. Question 1: What is my age in number of years?
    -Variable name personalized to question (no answer1): ageAnswer
    - Correct answer: 25
    - How I'll validate and check the answer : I'll first check that whether or not the user entered in any value. Then, I'll have to convert the string into a Number to check for the correct values. If the Number becomes NaN due to a string entry, I have to account for that as well. Then, I'll compare between equal to, greater than, or less than to determine if the answer is correct.
    Question 2: Which country did I first visit outside of the US?
    -Variable name personalized to question (no answer1): countryAnswer
    - Correct answer: Japan
    - How I'll validate and check the answer : I'll first check for a blank value, and then convert the string that they entered into lowercase to make sure I can check it regardless of the capitalization they used. Then, I'll check if the answer is the same as lowercase "japan". 
    Question 3: What game am I playing currently?
    -Variable name personalized to question (no answer1): currentGameAnswer
    - Correct answer: Baldur's Gate 3
    - How I'll validate and check the answer : I'll first check for a blank value, and then convert the string into lowercase to see if it's the correct answer regardless of capitalization. It could be called Baldur's Gate 3 or BG3 so I need to check for a user entering either option using an OR statement, and both would be correct.
    Question 4: What is my favorite coffee drink?
    -Variable name personalized to question (no answer1): coffeeAnswer
    - Correct answer: Latte
    - How I'll validate and check the answer : I'll check for a blank value, and then convert the string into lowercase to see if it's correct.

3. Math: I'll increment the variable score each time if there's a correct answer. At the end, I'll create a final score to calculate the percentage based on score by dividing by the number of questions and multiplying by 100.

4. Final feedback logic (if / else if / else):

I'll use && to check for both variations of a string without extra spaces if it's blank, and I'll use || if an answer can be referred to in multiple ways for Question 3. I'll use ! to cover the situations in which something is entered and something is not to determine the rest of the code flow.
*/

console.log("=== My Quiz Game ===");
alert(`Welcome to the quiz about Michaela. If you're ready to test your knowledge, then proceed.`);
let score = 0;

let ageAnswerString = prompt(`Question 1
What is my age in number of years?`);
console.log(`Question 1 answer: ${ageAnswerString}`);
if (ageAnswerString && ageAnswerString.trim() !== "") {
    let ageAnswer = Number(ageAnswerString);

    if(isNaN(ageAnswer)) {
        alert(`Incorrect -- that doesn't seem to be a number!`);
    } else if (ageAnswer === 25) {
    alert(`Correct!`);
    score++;
    } else if (ageAnswer < 25) {
    alert(`Incorrect!`);
    } else if (ageAnswer > 25) {
    alert(`Incorrect!`);
    }
} else {
    alert(`Question skipped!`);
}

let countryAnswer = prompt(`Current score: ${score} 
Question 2
Which country did I first visit outside of the US?`);
console.log(`Question 2 answer: ${countryAnswer}`);

if (countryAnswer && countryAnswer.trim() !== "") {
    let countryAnswerLowercase = countryAnswer.toLowerCase();

    if (countryAnswerLowercase === "japan") {
        alert(`Correct!`);
        score++;
    } else {
        alert(`Incorrect!`);
    }
} else {
    alert(`Question skipped!`);   
}

let currentGameAnswer = prompt(`Current score: ${score} 
Question 3
What game am I playing currently?`);

console.log(`Question 3 answer: ${currentGameAnswer}`);

if (currentGameAnswer && currentGameAnswer.trim() !== "") {
    let currentGameAnswerLowercase = currentGameAnswer.toLowerCase();

    if (currentGameAnswerLowercase === "baldur's gate 3" || currentGameAnswerLowercase === "bg3" ) {
        alert(`Correct!`);
        score++;
    } else {
        alert(`Incorrect!`);
    }
} else {
    alert(`Question skipped!`);
}

let coffeeAnswer = prompt(`Current score: ${score} 
Question 4
What is my favorite coffee drink?`);

console.log(`Question 4 answer: ${coffeeAnswer}`);

if (coffeeAnswer && coffeeAnswer.trim() !== "") {
    let coffeeAnswerLowercase = coffeeAnswer.toLowerCase();

    if (coffeeAnswerLowercase === "latte") {
        alert(`Correct!`);
        score++;
    } else {
        alert(`Incorrect!`);
    }
} else {
    alert(`Question skipped!`);
}

alert(`How well did you do? Let's check your answers...`);
let finalScore = ((score / 4) * 100);
console.log(`Received a score of ${finalScore}%.`);

if (finalScore === 100) {
        alert(`===Quiz Results===
        =Question 1= 
        Your Answer: ${ageAnswerString}
        Correct Answer: 25
        =Question 2=
        Your Answer: ${countryAnswer}
        Correct Answer: Japan
        =Question 3=
        Your Answer: ${currentGameAnswer}
        Correct Answer: Baldur's Gate 3
        =Question 4=
        Your Answer: ${coffeeAnswer}
        Correct Answer: Latte

        Final Score: ${finalScore}%
        Nice job, you got a perfect score!
        `);
} else if (finalScore === 75) {
        alert(`===Quiz Results===
        =Question 1= 
        Your Answer: ${ageAnswerString}
        Correct Answer: 25
        =Question 2=
        Your Answer: ${countryAnswer}
        Correct Answer: Japan
        =Question 3=
        Your Answer: ${currentGameAnswer}
        Correct Answer: Baldur's Gate 3
        =Question 4=
        Your Answer: ${coffeeAnswer}
        Correct Answer: Latte

        Final Score: ${finalScore}%
        Still passing -- you got a C!
        `);
} else {
        alert(`===Quiz Results===
        =Question 1= 
        Your Answer: ${ageAnswerString}
        Correct Answer: 25
        =Question 2=
        Your Answer: ${countryAnswer}
        Correct Answer: Japan
        =Question 3=
        Your Answer: ${currentGameAnswer}
        Correct Answer: Baldur's Gate 3
        =Question 4=
        Your Answer: ${coffeeAnswer}
        Correct Answer: Latte

        Final Score: ${finalScore}%
        Unfortunately, you failed. Better luck next time!
        `);
}
