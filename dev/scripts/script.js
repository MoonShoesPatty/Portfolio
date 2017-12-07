// Namespacing object
const portfolio = {};

portfolio.controller = new ScrollMagic.Controller();

// Create a new "scrollMagic scene"
portfolio.scrollMagicScene = function (elementID, classToAdd) {
    var ourScene = new ScrollMagic.Scene({
        triggerElement: elementID
    })
    .setClassToggle(elementID, classToAdd)
    .addTo(portfolio.controller)
}

// Function to run on Document Ready
portfolio.init = function () {
    portfolio.scrollMagicScene('#portfolioItem01', 'portfolioFadeIn')
    portfolio.scrollMagicScene('#portfolioItem02', 'portfolioFadeIn')
}

// Document Ready
$(document).ready(function () {
    portfolio.init();
});