var hamburgerButton = document.getElementById("hamburgerButton"),
    navMenusContainer = document.getElementById("navMenusContainer"),
    pageHeader = document.getElementById('pageHeader');
mobileNavMenuDisplayed = false;
mobileVersion = window.innerWidth <= 975;
submenusDisplaying = [];

function displayNavMenu () {
    // Gestion de l"affichage du menu de navigation mobile et du bouton hamburger
    if (mobileNavMenuDisplayed) {
        // Si le menu de navigation mobile est déjà affiché on le cache
        navMenusContainer.style.removeProperty("display");
        document.body.style.removeProperty("overflow-y");
        hamburgerButton.classList.remove("hamburgerMenuDisplayed");
        navMenusContainer.classList.remove("navMenusContainerDisplayed");
        pageHeader.classList.remove("pageHeaderIfNavMenusContainerDisplayed");
        document.body.classList.remove("bodyIfNavMenusContainerDisplayed");
        mobileNavMenuDisplayed = false;
    }
    else {
        // Si le menu de navigation mobile est masqué on l'affiche
        var headerHeight = window.getComputedStyle(pageHeader).getPropertyValue("height");
        headerHeight = headerHeight.slice(0, headerHeight.lastIndexOf("px"));
        navMenusContainer.style.height = window.innerHeight - headerHeight + "px";
        navMenusContainer.style.top = headerHeight + "px";
        navMenusContainer.classList.add("navMenusContainerDisplayed");
        pageHeader.classList.add("pageHeaderIfNavMenusContainerDisplayed");
        document.body.classList.add("bodyIfNavMenusContainerDisplayed");
        hamburgerButton.classList.add("hamburgerMenuDisplayed");
        mobileNavMenuDisplayed = true;
    }
}


function displaySubmenu(menu) {
    var selectedMenu = document.querySelector("#" + menu + " > .submenusNav"),
        selectedMenuDisplay = window.getComputedStyle(selectedMenu).getPropertyValue("display"),
        menuArrow = document.querySelector("#" + menu + " > .navTitle > div");
    if (mobileVersion) {
        if (selectedMenuDisplay === "none") {
            selectedMenu.style.display = "block";
            menuArrow.style.transform = "rotate(180deg)";
        }
        else {
            selectedMenu.style.display = "none";
            menuArrow.style.transform = "";
        }
    }
    else {
        selectedMenu.style.display = "none";
        menuArrow.style.transform = "";
    }
}



for (i=0; i<5; i++) {
    document.getElementById("navMenu" + i).addEventListener("click", function () {
        if (mobileVersion) {
            displaySubmenu(this.id);
        }
    });
}


function windowResized() {
    // On vérifie si la version du site a changé (mobile ou classique), et on met a jour la variable mobileVersion si c'est le cas
    if ((window.innerWidth <= 975 && mobileVersion === false) || (window.innerWidth > 975 && mobileVersion === true)) {
        mobileVersion = !mobileVersion;
        if (!mobileVersion) {
            for (i=0; i<5; i++) {
                displaySubmenu("navMenu" + i);
            }
        }
    }
}

hamburgerButton.addEventListener("click", displayNavMenu);
window.addEventListener("resize", windowResized);