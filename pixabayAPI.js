// variable declaration

// word bank -- randomly select search term from here
var searchTerms = ['puppy','cats','pink flowers','trees and sun'];
// add an indicator to determine if a term was already searched/displayed to the users
	// true/false asked property
	// create a counter -- if it matches the amount of images we want to show, stop the game


$(document).ready(function () {

$('button').click(function () {
	//create random number generator
		// to select random word from our word bank
		// to select random hit from our ajax call
	function generateRandomNum (min, max) {
		return Math.floor(Math.random() * max) + min;
	}

	// select random search term from word bank
	var selectedTerm = searchTerms[generateRandomNum(0, searchTerms.length)];

	// Pixabay API access
	var key = '6982377-68fe5b4423fc7e3f952f46c15';
	var queryUrl = 'https://pixabay.com/api/?key=' + key + '&q=' + selectedTerm + '&image_type=photo&pretty=true';

	$.ajax({
		url: queryUrl,
		method: 'GET'
	}).done(function (response) {
		// results is a list of the hits we received after running a search on selected search term
		var results = response.hits
		// chosen is the randomly selected element for this ajax call
		var chosen = generateRandomNum(0, results.length);
		// preview image -- need to enlarge image before displaying to users
		var image = $('<img>').attr('src', results[chosen].previewURL);
		// key words -- if users guess any of these words, score bonus points(?)
		var tags = results[chosen].tags;
		// appending selected image to body -- testing
		$('body').append(image);
		console.log(response);
		console.log(tags);
		console.log(chosen);
	});

	
})














})