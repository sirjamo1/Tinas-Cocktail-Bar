document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
    });; 
});

const splashPage = document.querySelector(".splash-page");
const carousel = document.querySelector(".carousel");

const splashButton = document.getElementsByTagName("button")
splashButton[0].addEventListener("click", () => {
 splashPage.style.display = "none";
})