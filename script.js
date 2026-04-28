// TAB SWITCHING
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active classes
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));

        // Activate selected tab
        button.classList.add("active");

        const target = button.dataset.tab;
        document.getElementById(target).classList.add("active");
    });
});


// OPEN WHEN LETTERS
const letterCards = document.querySelectorAll(".letter-card");
const openWhenMessage = document.getElementById("openwhen-message");

letterCards.forEach((card) => {

    card.onclick = function () {

        openWhenMessage.textContent =
            this.getAttribute("data-message");

    };

});


// SURPRISE BUTTON
const surpriseBtn = document.getElementById("surprise-btn");
const surpriseMessage = document.getElementById("surprise-message");

const messages = [
    "🎂 You deserve the happiest birthday ever!",
    "💖 Never forget how loved you are.",
    "✨ May all your dreams come true.",
    "🎁 Surprise! You are an amazing person!"
];

surpriseBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * messages.length);

    surpriseMessage.textContent = messages[randomIndex];

});