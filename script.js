// ================= TYPING ANIMATION =================

const words = [
    "Web Developer",
    "Frontend Developer",
    "Programmer",
    "B.Tech Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 80 : 150
    );
}

if (typingText) {
    typeEffect();
}


// ================= CONTACT FORM =================




// ================= RESPONSIVE MENU =================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector("nav");

if (menuIcon && navbar) {

    menuIcon.onclick = () => {

        navbar.classList.toggle("active");

    };

}


// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});
