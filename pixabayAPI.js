// pixabay API access
var key = '6982377-68fe5b4423fc7e3f952f46c15';
var testTerm = 'flower';
var searchTerms = ['puppy','cats','pink flowers','trees and sun'];
var queryUrl = 'https://pixabay.com/api/?key=' + key + '&q=' + testTerm + '&image_type=photo&pretty=true';

$(document).ready(function () {

$('button').click(function () {
	//create random number generator
		// to select random word from our word bank
		// to select random hit from our ajax call
	function generateRandomNum (min, max) {
		return Math.floor(Math.random() * max) + min;
	}

	$.ajax({
		url: queryUrl,
		method: 'GET'
	}).done(function (response) {
		// results is a list of the hits we received after running a search on selected search term
		var results = response.hits
		var tags = results[0].tags;
		console.log(response);
		console.log(tags);
	});

	
})














})