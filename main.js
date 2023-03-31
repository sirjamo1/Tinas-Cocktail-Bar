document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
    });; 
});

const splashPage = document.querySelector(".splash-page");
const carousel = document.querySelector(".carousel");
const splashR = document.querySelector(".splash-r")

const splashButton = document.getElementsByTagName("button")
const neonRedText = document.querySelector(".neon-red-text")

splashButton[0].addEventListener("click", () => {
neonRedText.style.animation = "none"
splashR.style.animation = "blackout 3s forwards"
setTimeout(() => {
    splashPage.style.display = "none";
}, 3500);

})