// variable declaration

// word bank -- randomly select search term from here
var searchTerms = ['puppy','cats','pink flowers','trees and sun'];
// add an indicator to determine if a term was already searched/displayed to the users -- refernce trivia game structure
	// prevents re-display of images
	// true/false asked property
	// create a counter -- if it matches the amount of images we want to show, stop the game


$(document).ready(function () {

	// points accumulated by user
	var points = 0;
	// stores user guesses to be referenced to later and compared
	var guesses = [];

$('#generate-photo-info').click(function () {
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
		var chosen = results[generateRandomNum(0, results.length)];
		// preview image -- need to enlarge image before displaying to users
		var image = $('<img>').attr('src', chosen.previewURL);
		// string of key words -- if users guess any of these words, score bonus points
		var tags = chosen.tags.split(', ');
		// photographer of chosen image
		var photographer = chosen.user;
		// link to photographer's profile page
		var profileLink = $('<a>').attr('target', '_blank')
								  .attr('href', 'https://pixabay.com/en/users/' + photographer)
								  .text('See more work from this photographer');
		// link to presented photo
		var imageLink = $('<a>').attr('target', '_blank')
								.attr('href', chosen.pageURL)
								.text('More about this image');

		// appending selected image and photographer link to body -- testing
		$('body').append(image).append(profileLink).append(imageLink);

		console.log(response);
		console.log(chosen);
		console.log(tags);
		console.log(typeof tags);
		console.log(photographer);
		console.log(profileLink);

		// if guesses includes one of the actual tags associated with the image (from API), grant 2 points.
		// iterate through tags and check to see if they exist in the guesses array
			// refactor this code later for multiplayer feature
		function addBonusPoints () {
			// number of matches
			var matches = 0;
			// number of bonus points earned
			var bonusPoints = 0;

			for (var i=0; i < tags.length; i++) {

				if (guesses.includes(tags[i])) {
					matches++;
				}
			}

			bonusPoints = matches * 2;

			// update total points;
			points += bonusPoints;

			console.log(matches);
			console.log(bonusPoints);
			console.log(points);
		}

		// capture user input and store in array
		$('#submit-btn').click(function (event) {
			// prevent page reload
			event.preventDefault();

			// capture user input
			var guess = $('#guess-input').val();
			console.log(guess);

			// adds user guess to guesses array
			guesses.push(guess);
			console.log(guesses);

			// clear input field
			$('#guess-input').val('');
		})

		// displays total points accumulated by user
		$('#show-stats').click(function () {
			addBonusPoints();
		})

	});

	
})

// game-logic
/*1. Random Image appears center page.
2. Timer begins counting down from 30 seconds / or 1 minute. 
3. Each player is able to enter a single word, describing the image, into a form field. When they click ‘submit’, their guess is pushed into a collaborative array of guesses. 
4. If their guess matches a word already in the array (AKA, the other person already guessed the same word) both users get a point.
5. When timer runs out, the game ends. Both users are shown the Array of Guesses.
*/





























})