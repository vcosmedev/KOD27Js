

let georgeTimestamp = new Date("1985-09-20").getTime();
console.log(georgeTimestamp);

let sergyTimestamp = new Date("1993-10-17").getTime();
console.log(sergyTimestamp);

let difference = Math.abs(georgeTimestamp - sergyTimestamp); // Math.abs() -> get absolute value
console.log(difference);

let differenceInSeconds = difference / 1000;
let differenceInMinutes = differenceInSeconds / 60;
let differenceInHours = differenceInMinutes / 60;
let differenceInDays = differenceInHours / 24;
let differenceInMonths = differenceInDays / 30;
let differenceInYears = differenceInMonths / 12;
console.log(differenceInYears);
console.log(19 * 12);
console.log(30.5 * 0.28);

// difference / 1000 / 60 / 60 / 24 / 365


// let diffInYears = 
// console.log(diffInYears);