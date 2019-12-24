var pageContent = document.getElementById("pageContent"),
    pageFooter = document.getElementById("pageFooter");


window.addEventListener("load", function () {
    var headerHeight = window.getComputedStyle(pageHeader).getPropertyValue("height");
    headerHeight = headerHeight.slice(0, headerHeight.lastIndexOf("px"));

    var footerHeight = window.getComputedStyle(pageFooter).getPropertyValue("height");
    footerHeight = footerHeight.slice(0, footerHeight.lastIndexOf("px"));

    pageContent.style.minHeight = window.innerHeight - headerHeight - footerHeight + "px";
});

