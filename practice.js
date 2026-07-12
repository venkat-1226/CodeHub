// ==========================================
// JavaScript Practice
// Day 17 - Objects, Arrays and forEach()
// ==========================================

console.log("===== JavaScript Practice =====");

// ------------------------------------------
// Variables
// ------------------------------------------

const appName = "CodeHub";

let userName = "Venkat";

let premium = true;

console.log(`Application : ${appName}`);
console.log(`User : ${userName}`);
console.log(`Premium : ${premium}`);

console.log("--------------------------------");

// ------------------------------------------
// Objects
// ------------------------------------------

const user = {

    name: "Venkat",

    college: "Your College",

    favoritePlatform: "LeetCode",

    rating: 1650

};

console.log("===== User Object =====");

console.log(user);

console.log(user.name);

console.log(user.favoritePlatform);

console.log("--------------------------------");

// ------------------------------------------
// Platform Objects
// ------------------------------------------

const leetcode = {

    name: "LeetCode",

    rating: 1650,

    solved: 540

};

const codeforces = {

    name: "Codeforces",

    rating: 1550,

    solved: 220

};

const codechef = {

    name: "CodeChef",

    rating: 1800,

    solved: 310

};

const atcoder = {

    name: "AtCoder",

    rating: 1450,

    solved: 150

};

console.log("===== Individual Objects =====");

console.log(leetcode);

console.log(codeforces);

console.log(codechef);

console.log(atcoder);

console.log("--------------------------------");

// ------------------------------------------
// Arrays
// ------------------------------------------

let platformNames = [

    "LeetCode",

    "Codeforces",

    "CodeChef",

    "AtCoder"

];

console.log("===== Platform Names =====");

console.log(platformNames);

console.log(platformNames[0]);

console.log(platformNames[1]);

console.log(platformNames.length);

console.log("--------------------------------");

// ------------------------------------------
// Push & Pop
// ------------------------------------------

platformNames.push("HackerRank");

platformNames.push("GeeksforGeeks");

console.log(platformNames);

platformNames.pop();

console.log(platformNames);

console.log("--------------------------------");

// ------------------------------------------
// Array of Objects
// ------------------------------------------

const platforms = [

    {

        name: "LeetCode",

        rating: 1650,

        solved: 540

    },

    {

        name: "Codeforces",

        rating: 1550,

        solved: 220

    },

    {

        name: "CodeChef",

        rating: 1800,

        solved: 310

    },

    {

        name: "AtCoder",

        rating: 1450,

        solved: 150

    }

];

console.log("===== Platform Details =====");

platforms.forEach(function(platform){

    console.log(`Platform : ${platform.name}`);

    console.log(`Rating   : ${platform.rating}`);

    console.log(`Solved   : ${platform.solved}`);

    console.log("----------------------");

});

console.log("--------------------------------");

// ------------------------------------------
// Print Only Platform Names
// ------------------------------------------

console.log("===== Platform Names =====");

platforms.forEach(function(platform){

    console.log(platform.name);

});

console.log("--------------------------------");

// ------------------------------------------
// Print Only Ratings
// ------------------------------------------

console.log("===== Ratings =====");

platforms.forEach(function(platform){

    console.log(platform.rating);

});

console.log("--------------------------------");

// ------------------------------------------
// Total Solved
// ------------------------------------------

let totalSolved = 0;

platforms.forEach(function(platform){

    totalSolved += platform.solved;

});

console.log(`Total Solved : ${totalSolved}`);

console.log("--------------------------------");

// ------------------------------------------
// Highest Rating
// ------------------------------------------

let highestRating = 0;

platforms.forEach(function(platform){

    if(platform.rating > highestRating){

        highestRating = platform.rating;

    }

});

console.log(`Highest Rating : ${highestRating}`);

console.log("--------------------------------");

// ------------------------------------------
// Functions
// ------------------------------------------

function showPlatform(platform){

    console.log(platform.name);

    console.log(platform.rating);

    console.log(platform.solved);

}

console.log("===== Function Demo =====");

showPlatform(leetcode);

showPlatform(codeforces);

console.log("--------------------------------");

// ------------------------------------------
// Return Function
// ------------------------------------------

function calculateAverageRating(r1,r2,r3,r4){

    return (r1+r2+r3+r4)/4;

}

let average = calculateAverageRating(

    leetcode.rating,

    codeforces.rating,

    codechef.rating,

    atcoder.rating

);

console.log(`Average Rating : ${average}`);

console.log("--------------------------------");

// ------------------------------------------
// If Else
// ------------------------------------------

if(average >= 1700){

    console.log("Excellent Competitive Programmer");

}

else if(average >= 1500){

    console.log("Good Competitive Programmer");

}

else{

    console.log("Keep Practicing");

}

console.log("--------------------------------");

// ------------------------------------------
// Programming Languages
// ------------------------------------------

const languages = [

    "C",

    "C++",

    "Java",

    "Python",

    "JavaScript"

];

console.log("===== Languages =====");

languages.forEach(function(language){

    console.log(language);

});

console.log("--------------------------------");

console.log("===== End of Practice =====");