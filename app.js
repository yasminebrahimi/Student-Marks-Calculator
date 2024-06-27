


// A JavaScript utility to calculate various statistics from an array of student marks. 
// The script calculates the average of all marks, the average of passing marks, and the 
// average after shifting all marks by a fixed value.


const userMarks = [9, 10, 13, 18, 20, 15, 7]; 

// 1. Calculate the average of all marks
const ave = userMarks.reduce((acc, curr, _, arr) => acc + curr, 0) / userMarks.length;

// Log the average of all marks to the console, rounded to two decimal places
console.log(ave.toFixed(2)); 

// 2. Calculate the average of passed students (assuming passing mark is > 10)
const passAve = userMarks
    .filter(m => m > 10) // Filter out marks greater than 10
    .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);

// Log the average of passing marks to the console, rounded to two decimal places
console.log(passAve.toFixed(2)); 

// 3. Shift marks by +3 and recalculate the average
const shiftAve = userMarks
    .map(m => m + 3) // Increase each mark by 3
    .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);

// Log the average of shifted marks to the console, rounded to two decimal places
console.log(shiftAve.toFixed(2)); 
