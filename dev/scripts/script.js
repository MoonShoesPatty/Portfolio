// Namespacing object
const portfolio = {};

// New controller - used for ScrollMagic
portfolio.controller = new ScrollMagic.Controller();

// Inner height of viewport - used to fade out landing page on scroll
portfolio.offset = window.innerHeight/-2.2;

// Create a new ScrollMagic scene
portfolio.scrollMagicScene = function (elementID, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID,
		offset: portfolio.offset
	})
	.setClassToggle(elementID, classToAdd)
	.addTo(portfolio.controller)
}

portfolio.portfolioItems = function (elementID, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID,
		offset: portfolio.offset + 150
	})
		.setClassToggle(elementID, classToAdd)
		.addTo(portfolio.controller)
}

portfolio.removeLandingPage = function (elementID, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID,
		offset: 200
	})
		.setClassToggle(elementID, classToAdd)
		.addTo(portfolio.controller)
}

// Social Media Icons Slide In
portfolio.smIconScene = function (elementClass, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: '#aboutSection'
	})
		.setClassToggle(elementClass, classToAdd)
		.addTo(portfolio.controller)
}

// Line on each section heading
portfolio.headingLineScene = function (elementID, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: elementID,
		offset: portfolio.offset
	})
		.setClassToggle(elementID, classToAdd)
		.addTo(portfolio.controller)
}

portfolio.skillsList = function (triggerID, elementClass, classToAdd) {
	let newScene = new ScrollMagic.Scene({
		triggerElement: triggerID,
		offset: portfolio.offset
	})
		.setClassToggle('.skillItem', classToAdd)
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

portfolio.scrollMagicAnimations = function() {
	//Portfolio Items
	portfolio.portfolioItems('#portfolioPokedex', 'portfolioFadeIn');
	portfolio.portfolioItems('#portfolioReact', 'portfolioFadeIn');
	portfolio.portfolioItems('#portfolioHearthstone', 'portfolioFadeIn');
	portfolio.portfolioItems('#portfolioResponsive', 'portfolioFadeIn');
	//Heading Line
	portfolio.headingLineScene('#about__headerLine', 'sectionHeader__line--slide');
	portfolio.headingLineScene('#portfolio__headerLine', 'sectionHeader__line--slide');
	portfolio.headingLineScene('#contact__headerLine', 'sectionHeader__line--slide');
	//Skills List
	portfolio.skillsList('#skillsList', '.skillItem', 'skillItemSlide');
	//portfolio.removeLandingPage('#FN', 'pageTitleFN');
	//Social Media Icons
	portfolio.smIconScene('.smIcon__icon', 'smIcon__icon--slideIn');
	//portfolio.scrollMagicSceneDuration('#landingPage', 'headerFadeOut', portfolio.windowHeight);
}

// Function to run on Document Ready
portfolio.init = function() {
	portfolio.scrollMagicAnimations();
}

// Document Ready
$(document).ready(function () {
	portfolio.init();
});