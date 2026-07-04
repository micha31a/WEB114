"use strict";

/* Michaela Harding 6/14/2026
    Variable: myName
    Data type: String
    Explanation: Collection of letters to spell out my name
    Variable: favoriteColor
    Data type: String
    Explanation: Word that describes my favorite color
    Variable: favoriteFood
    Data type: String
    Explanation: Word for my favorite food
    Variable: favoriteAnimal
    Data type: String
    Explanation: Name of my favorite animal
    Variable: favoriteSeason
    Data type: String
    Explanation: Word for my favorite season
    Variable: myAge
    Data type: Number
    Explanation: Age is a numerical value
    Variable: isStudent
    Data type: Boolean
    Explanation: I am either a student or I'm not; therefore true/false is required

*/ 
let myName = "Michaela",
    favoriteColor = "blue",
    favoriteFood = "fries",
    favoriteAnimal = "dog",
    favoriteSeason = "winter",
    myAge = 25,
    isStudent = true;

/*
Which variable could easily have the wrong data type? - myAge, as it seems like it could be a string since it is also displaying "facts" about me like the other strings 
What mistake might someone make with it? -  If it's a string, they may try to add values such as if it's past a certain date, increase the number by 1 as I'm now a year older, but that's impossible since it's not actually a numerical value if it's a string
*/

console.log(`Hi, my name is ${myName}, and my favorite color is ${favoriteColor}, my favorite food is ${favoriteFood}, my favorite animal is a ${favoriteAnimal}.`);
console.log(`${favoriteSeason} is my favorite time of year, and I am ${myAge} years old.`);

/*
1. Which data type was easiest to choose? Why? Strings, as it was easy to determine when something was just a word/something that needed to be spelled out.
2. Which variable was hardest to decide a data type for? myAge, because it seemed like I was outputting a static "string" that described my age -- but in fact it needed to be a number.
3. What happens if a number is stored as a string in JavaScript? It can't make changes to the numerical value by adding/subtracting etc. like we would expect with numerical values.
4. Why is it helpful to plan data types before coding? To make sure when you code that you are considering what your variable can or can't do based on the type it is.

*/