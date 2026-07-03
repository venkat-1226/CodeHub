// ======================================
// 🚀 CodeHub Dashboard
// Developed by Venkat
// ======================================

console.log("🚀 Welcome to CodeHub!");

// --------------------------------------
// Application Information
// --------------------------------------

const appName = "CodeHub";
const developer = "Venkat";

console.log(`Application : ${appName}`);
console.log(`Developer   : ${developer}`);

// --------------------------------------
// User Information
// --------------------------------------

let userName = "Venkat";
let isPremium = true;

console.log(`User        : ${userName}`);
console.log(`Premium     : ${isPremium}`);

// --------------------------------------
// Platform Data
// --------------------------------------

let leetcodeRating = 1650;
let leetcodeSolved = 540;

let codeforcesRating = 1550;
let codeforcesSolved = 220;

let codechefRating = 1800;
let codechefSolved = 310;

let atcoderRating = 1450;
let atcoderSolved = 150;

// --------------------------------------
// DOM Functions
// --------------------------------------

function updateTitle(title) {
    document.getElementById("title").textContent = title;
}

function updateRating(id, rating) {
    document.getElementById(id).textContent = rating;
}

function updateSolved(id, solved) {
    document.getElementById(id).textContent = solved;
}

// --------------------------------------
// Update Dashboard
// --------------------------------------

updateTitle("🚀 CodeHub Dashboard");

updateRating("leetcode-rating", leetcodeRating);
updateRating("codeforces-rating", codeforcesRating);
updateRating("codechef-rating", codechefRating);
updateRating("atcoder-rating", atcoderRating);

updateSolved("leetcode-solved", leetcodeSolved);
updateSolved("codeforces-solved", codeforcesSolved);
updateSolved("codechef-solved", codechefSolved);
updateSolved("atcoder-solved", atcoderSolved);

// --------------------------------------
// Button Events
// --------------------------------------

function openWebsite(buttonId, url) {

    const button = document.getElementById(buttonId);

    button.addEventListener("click", function () {

        window.open(url, "_blank");

    });

}

openWebsite("leetcode-btn", "https://leetcode.com");

openWebsite("codeforces-btn", "https://codeforces.com");

openWebsite("codechef-btn", "https://www.codechef.com");

openWebsite("atcoder-btn", "https://atcoder.jp");

// --------------------------------------
// Console Information
// --------------------------------------

console.log("====================================");

console.log("Platform Ratings");

console.log(`LeetCode   : ${leetcodeRating}`);
console.log(`Codeforces : ${codeforcesRating}`);
console.log(`CodeChef   : ${codechefRating}`);
console.log(`AtCoder    : ${atcoderRating}`);

console.log("------------------------------------");

console.log("Solved Problems");

console.log(`LeetCode   : ${leetcodeSolved}`);
console.log(`Codeforces : ${codeforcesSolved}`);
console.log(`CodeChef   : ${codechefSolved}`);
console.log(`AtCoder    : ${atcoderSolved}`);

console.log("====================================");