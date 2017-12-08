// Namespacing object
const portfolio = {};

// New controller - used for ScrollMagic
portfolio.controller = new ScrollMagic.Controller();

// Inner height of viewport - used to fade out landing page on scroll
portfolio.windowHeight = window.innerHeight;

// Create a new ScrollMagic scene
portfolio.scrollMagicScene = function (elementID, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID
	})
	.setClassToggle(elementID, classToAdd)
	.addTo(portfolio.controller)
}

// Social Media Icons Slide In
portfolio.smIconScene = function (elementClass, classToAdd) {
	console.log('Firing?')
	let newScene = new ScrollMagic.Scene({
		triggerElement: '#aboutSection'
	})
		.setClassToggle(elementClass, classToAdd)
		.addTo(portfolio.controller)
}

// A new ScrollMagic scene with a duration
portfolio.scrollMagicSceneDuration = function (elementID, classToAdd, customDuration) {
	//const tween = new TweenMax.to(elementID, 1, {opacity: 0})
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID,
		duration: customDuration
	})
		//.setTween(tween)
		.addTo(portfolio.controller)
}

// Function to run on Document Ready
portfolio.init = function () {
	portfolio.scrollMagicScene('#portfolioItem01', 'portfolioFadeIn');
	portfolio.scrollMagicScene('#portfolioItem02', 'portfolioFadeIn');
	portfolio.smIconScene('.smIcon__icon', 'smIcon__icon--slideIn');
	portfolio.scrollMagicSceneDuration('#landingPage', 'headerFadeOut', portfolio.windowHeight);
}

// Document Ready
$(document).ready(function () {
	portfolio.init();
});