var hamburgerButton = document.getElementById("hamburgerButton"),
    navMenuContainer = document.getElementById("navMenuContainer"),
    pageHeader = document.getElementById('pageHeader');
mobileNavMenuDisplayed = false;

function displayNavMenu () {
    if (mobileNavMenuDisplayed) {
        // Si le menu de navigation mobile est déjà affiché on le cache
        navMenuContainer.style.removeProperty("display");
        document.body.style.removeProperty("overflow-y");
        hamburgerButton.classList.remove("hamburgerMenuDisplayed");
        navMenuContainer.classList.remove("navMenuContainerDisplayed");
        pageHeader.classList.remove("pageHeaderIfNavMenuContainerDisplayed");
        document.body.classList.remove("bodyIfNavMenuContainerDisplayed");
        mobileNavMenuDisplayed = false;
    }
    else {
        // Si le menu de navigation mobile est masqué on l'affiche
        var headerHeight = window.getComputedStyle(pageHeader).getPropertyValue("height");
        headerHeight = headerHeight.slice(0, headerHeight.lastIndexOf("px"));
        navMenuContainer.style.height = window.innerHeight - headerHeight + "px";
        navMenuContainer.style.top = headerHeight + "px";
        navMenuContainer.classList.add("navMenuContainerDisplayed");
        pageHeader.classList.add("pageHeaderIfNavMenuContainerDisplayed");
        document.body.classList.add("bodyIfNavMenuContainerDisplayed");
        hamburgerButton.classList.add("hamburgerMenuDisplayed");
        mobileNavMenuDisplayed = true;
    }
}

hamburgerButton.addEventListener("click", displayNavMenu);