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

const memories = [
    {
        type: "image",
        src: "memory1.jpg",
        text: "That time na niyaya kita sa nearby coffee shop XD that was our first meeting in a while after we went to different SHS"
    },
    {
        type: "image",
        src: "memory2.jfif",
        text: "That time na I asked you pa what coffee you wanted kasi magvavalo tayo after my class XD"
    },
    {
        type: "video",
        src: "memory3.mp4",
        text: "I saw this randomly and thought it's funny XD panahon na Kazuha glazers pa tayo and you set his voiceline as a ring tone XD"
    }

];

const surpriseImage = document.getElementById("surprise-image");
const surpriseVideo = document.getElementById("surprise-video");

surpriseBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * memories.length);
    const selected = memories[randomIndex];

    // reset both first
    surpriseImage.style.display = "none";
    surpriseVideo.style.display = "none";

    if (selected.type === "image") {
        surpriseImage.src = selected.src;
        surpriseImage.style.display = "block";
    } else {
        surpriseVideo.src = selected.src;
        surpriseVideo.style.display = "block";
        surpriseVideo.load();
        surpriseVideo.play();
    }

    surpriseMessage.textContent = selected.text;
});