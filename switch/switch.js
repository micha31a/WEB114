//Michaela Harding 7/4/2026

"use strict";

let favMonth = prompt(`What is your favorite month?`);

let favMonthLower = favMonth.toLowerCase();

switch(favMonthLower.trim()) {
    case 'march':
    case 'april':
    case 'may':
        alert(`Spring is nice with everything blooming.`);
        break;
    case 'june':
    case 'july':
    case 'august':
        alert(`You enjoy the summer months!`);
        break;  
    case 'september':
    case 'october':
    case 'november':
        alert(`Fall is fun with all of the pretty colors.`);
        break;
    case 'december':
    case 'january':
    case 'february':
        alert(`You love the winter months!`);
        break; 
    case '':
        alert(`You don't seem to have entered any month. Refresh to try again.`);
        break;
    default:
        alert(`Other months are interesting too!`);
        break;
}