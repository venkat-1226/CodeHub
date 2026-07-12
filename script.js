console.log("🚀 Welcome to CodeHub!");

const platforms = [
    {
        icon: "🟡",
        name: "LeetCode",
        rating: 1650,
        solved: 540,
        url: "https://leetcode.com"
    },
    {
        icon: "🔵",
        name: "Codeforces",
        rating: 1550,
        solved: 220,
        url: "https://codeforces.com"
    },
    {
        icon: "⭐",
        name: "CodeChef",
        rating: 1800,
        solved: 310,
        url: "https://www.codechef.com"
    },
    {
        icon: "🔴",
        name: "AtCoder",
        rating: 1450,
        solved: 150,
        url: "https://atcoder.jp"
    }
];

const container = document.getElementById("platform-container");

platforms.forEach((platform) => {

    // Create Card
    const card = document.createElement("div");
    card.className = "platform-card";

    // Platform Name
    const title = document.createElement("h3");
    title.textContent = `${platform.icon} ${platform.name}`;

    // Rating
    const rating = document.createElement("p");
    rating.innerHTML = `<strong>Rating:</strong> ${platform.rating}`;

    // Solved
    const solved = document.createElement("p");
    solved.innerHTML = `<strong>Solved:</strong> ${platform.solved}`;

    // Button
    const button = document.createElement("button");
    button.className = "view-btn";
    button.textContent = "View Profile";

    button.addEventListener("click", () => {
        window.open(platform.url, "_blank");
    });

    // Add elements to card
    card.appendChild(title);
    card.appendChild(rating);
    card.appendChild(solved);
    card.appendChild(button);

    // Add card to page
    container.appendChild(card);

});