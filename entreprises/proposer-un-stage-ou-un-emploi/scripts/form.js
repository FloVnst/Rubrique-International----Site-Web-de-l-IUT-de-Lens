formStep = 0;

function nextStep() {
    if (formStep < 2) {
        document.getElementById("formStep" + formStep).classList.add("hidden");
        formStep += 1;
        document.getElementById("formStep" + formStep).classList.remove("hidden");
    }
}


function previousStep() {
    if (formStep > 0) {
        document.getElementById("formStep" + formStep).classList.add("hidden");
        formStep -= 1;
        document.getElementById("formStep" + formStep).classList.remove("hidden");
    }
}