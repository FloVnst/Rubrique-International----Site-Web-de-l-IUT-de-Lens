// Variables contenant les éléments html de la page
var hamburgerButton = document.getElementById("hamburgerButton"),
    navMenusContainer = document.getElementById("navMenusContainer"),
    pageHeader = document.getElementById('pageHeader');

// Variables de test
var mobileNavMenuDisplayed = false,             // Vaut true si le menu de navigation mobile est affiché
    mobileVersion = window.innerWidth <= 975;   // Vaut true si le site est en version mobile


// Gestion de l"affichage du menu de navigation mobile et du bouton hamburger
function displayNavMenu () {
    // Si le menu de navigation mobile est déjà affiché on le cache
    if (mobileNavMenuDisplayed) {
        navMenusContainer.style.removeProperty("display");
        document.body.style.removeProperty("overflow-y");
        hamburgerButton.classList.remove("hamburgerMenuDisplayed");
        navMenusContainer.classList.remove("navMenusContainerDisplayed");
        pageHeader.classList.remove("pageHeaderIfNavMenusContainerDisplayed");
        document.body.classList.remove("bodyIfNavMenusContainerDisplayed");
        mobileNavMenuDisplayed = false;
    }
    // Sinon on l'affiche
    else {
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

// Gestion de l'affichage des sous-menus du menu de navigation
function displaySubmenu(menu) {
    var selectedMenu = document.querySelector("#" + menu + " > .submenusNav"),
        selectedMenuDisplay = window.getComputedStyle(selectedMenu).getPropertyValue("display"),
        menuArrow = document.querySelector("#" + menu + " > .navTitle > div");

    // Si le site est en version mobile
    if (mobileVersion) {
        // Si le menu sélectionné est caché, on l'affiche
        if (selectedMenuDisplay === "none") {
            selectedMenu.style.display = "block";
            menuArrow.style.transform = "rotate(180deg)"; // Animation du bouton d'affichage de menu
        }
        // Sinon on le cache
        else {
            selectedMenu.style.display = "none";
            menuArrow.style.transform = "";
        }
    }
    // Si le site est en version classique, on annule les propriétés ajoutées au sous-menu pour la version mobile
    else {
        selectedMenu.style.display = "none";
        menuArrow.style.transform = "";
    }
}

// Fonction executée lorsque la fenêtre change de dimensions
function windowResized() {
    // On vérifie si la version du site a changé (mobile ou classique), et on met a jour la variable mobileVersion si c'est le cas
    if ((window.innerWidth <= 975 && mobileVersion === false) || (window.innerWidth > 975 && mobileVersion === true)) {
        mobileVersion = !mobileVersion;
        // Si le site est en version classique, on affiche tous les sous-menus de la page
        if (!mobileVersion) {
            for (i=0; i<5; i++) {
                displaySubmenu("navMenu" + i);
            }
        }
    }

    // Stockage de la hauteur du header et du footer
    var headerHeight = window.getComputedStyle(pageHeader).getPropertyValue("height"),
        footerHeight = window.getComputedStyle(pageFooter).getPropertyValue("height");
    headerHeight = headerHeight.slice(0, headerHeight.lastIndexOf("px"));
    footerHeight = footerHeight.slice(0, footerHeight.lastIndexOf("px"));

    // Changement de la hauteur du menu de navigation mobile (pour couvrir tout l'écran en hauteur, la largeur étant toujours 100%)
    if (mobileVersion && mobileNavMenuDisplayed) {
        navMenusContainer.style.height = window.innerHeight - headerHeight + "px";
    }

    // Mise à jour de la hauteur minimale du contenu de la page
    pageContent.style.minHeight = window.innerHeight - headerHeight - footerHeight + "px";
}


// Gestion des clics sur le bouton hamburger, déclanchant l'affichage du menu de navigation mobile
hamburgerButton.addEventListener("click", displayNavMenu);

// Gestion de redimensionnement de la fenêtre
window.addEventListener("resize", windowResized);

// Gestion des clics sur les titres de menus dans le menu de navigation mobile
for (i=0; i<5; i++) {
    document.getElementById("navMenu" + i).addEventListener("click", function () {
        if (mobileVersion) {
            displaySubmenu(this.id);
        }
    });
}