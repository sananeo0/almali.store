const menuIcon = document.getElementById("menuIcon");
const options = document.getElementById("options")
const rightSide = document.getElementById("right-side")

menuIcon.addEventListener("click", () => {

    options.style.transform = "translateX(18rem)";
    rightSide.style.display = "block"

});


document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !options.contains(event.target)) {
        rightSide.style.display = "none"
        options.style.transform = "translateX(-18rem)";
    }
});

