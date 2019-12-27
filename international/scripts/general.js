formationSelectors = [document.getElementById("formationSelectorInformatique"), document.getElementById("formationSelectorMediasNum"), document.getElementById("formationSelectorGestion"),document.getElementById("formationSelectorCommerce")];
formations = [document.getElementById("formationsInformatique"), formationsMediasNum = document.getElementById("formationsMediasNum"), document.getElementById("formationsGestion"), document.getElementById("formationsCommerce")];
displayedFormationCategory = 0;

for (i=0; i< formationSelectors.length; i++) {
    formationSelectors[i].addEventListener("click", function () {
        switch (this.id) {
            case "formationSelectorInformatique" :
                formation = 0;
                break;
            case "formationSelectorMediasNum" :
                formation = 1;
                break;
            case "formationSelectorGestion" :
                formation = 2;
                break;
            case "formationSelectorCommerce" :
                formation = 3;
                break;
        }
        if (formation !== displayedFormationCategory) {
            displayFormation(formation);
        }
    });
}

function displayFormation (formation) {
    formationSelectors[formation].classList.add("selectedFormationSelector");
    formationSelectors[displayedFormationCategory].classList.remove("selectedFormationSelector");
    formations[displayedFormationCategory].classList.remove("selectedFormation");
    formations[formation].classList.add("selectedFormation");
    displayedFormationCategory = formation;
}