"use strict";

//space station

//use backticks and template literals

const myName = `Michaela`;
const setting = `space station`;

alert(`Welcome. My name is ${myName}. I will help you create a story that takes place on a ${setting}.`);
const charName = prompt(`First, tell me your character's name.`) || `Wanderer`;

const petName = prompt(`What is the name of the pet or companion with ${charName}?`);

const superpower = prompt(`What superpower does ${charName} have?`);

const trainingYearsText = prompt(`How many years has ${charName} been training ${superpower}?`);

const trainingYears = Number(trainingYearsText);
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Does ${charName} like fighting monsters? Click OK for Yes. Click Cancel for No.`);

console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}...almost ready!`);

alert(`Summary:
    ====================================
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superpower}
    Power Level: ${powerLevel}
    Monster fighter? ${likesFighting ? "Yes" : "No"}
    
    Story:
    ====================================
    Within the ruins of a mighty ${setting}, ${charName} and their trusty companion, ${petName}, use the power of ${superpower} to explore and fight off any enemies that come their way. Having trained for ${trainingYears} years and now at a level of ${powerLevel}, ${charName} can ward off anyone with ease.
    ====================================`);