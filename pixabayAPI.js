// variable declaration
var selectedTerm;
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

	// create function that selects random word from word bank and random hit from ajax response
		// when invoking function, be sure to store result in variable
	function randomSelect (array) {
		return array[generateRandomNum(0, array.length)];
	}

	// pixabay API access
	var key = '6982377-68fe5b4423fc7e3f952f46c15';
	var queryUrl = 'https://pixabay.com/api/?key=' + key + '&q=' + 'trees and sun' + '&image_type=photo&pretty=true';

	$.ajax({
		url: queryUrl,
		method: 'GET'
	}).done(function (response) {
		// results is a list of the hits we received after running a search on selected search term
		var results = response.hits
		var image = $('<img>').attr('src', results[0].previewURL);
		var tags = results[0].tags;
		$('body').append(image);
		console.log(response);
		console.log(tags);
	});

	
})














})