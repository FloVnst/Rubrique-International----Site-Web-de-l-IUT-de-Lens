hamburgerButton = document.getElementById("hamburgerButton");
navMenu = document.getElementById("navMenu");
topBar = document.getElementById("topBar")

function displayNavMenu() {
    if (window.getComputedStyle(navMenu).getPropertyValue("display") === "none") {
        navMenu.style.top = window.getComputedStyle(topBar).getPropertyValue("height");
        navMenu.style.display = "flex";
        navMenu.style.height = "150px";
        navMenu.style.width = "100%";
        topBar.style.position = "fixed";
    }
    else {
        navMenu.style.display = "none";
        navMenu.style.width = "100%";
    }
}

hamburgerButton.addEventListener("click", displayNavMenu);