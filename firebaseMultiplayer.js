var config = {
    apiKey: "AIzaSyAKovIgnElTXfZog6-eGf7X3vU1I7go6yI",
    authDomain: "imagewordmatch.firebaseapp.com",
    databaseURL: "https://imagewordmatch.firebaseio.com",
    projectId: "imagewordmatch",
    storageBucket: "imagewordmatch.appspot.com",
    messagingSenderId: "621229379920"
 };

firebase.initializeApp(config);

var database = firebase.database();

var player1Data = null;
var player2Data = null;

var player1Exists = false;
var player2Exists = false;

var player1Ref = database.ref('/player1');
var player2Ref = database.ref('/player2');

// =============================================================================

$(document).ready(function () {

	$('#submit-displayName').click(function (event) {
		event.preventDefault();

		displayName = $('#user-displayName').val();
		console.log(displayName);
	})

	database.ref().on('value', function (snapshot) {
		console.log(snapshot.val());

		player1Ref.set({
			player1Data
		})

		player2Ref.set({
			player2Data
		})
	})

	// creating game-rooms with max occupancy of 2
	// when player enters page:
		// create child node in game-rooms folder firebase
			// games will be stored here
			// children of this node will have creator, joiner, and status properties
				// if room is full, start the game

	var gameRoomRef = database.ref('/game-rooms');


	// ---------------- keeping track of connections ----------

	// connectionsRef references a specific location in our database.
	// All of our connections will be stored in this directory.
	var connectionsRef = database.ref("/connections");

	// '.info/connected' is a special location provided by Firebase that is updated
	// every time the client's connection state changes.
	// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
	var connectedRef = database.ref(".info/connected");

	// When the client's connection state changes...
	connectedRef.on("value", function(snap) {

	  // If they are connected..
	  if (snap.val()) {
	    // Add user to the connections list.
	    var con = connectionsRef.push(true);
	    // Remove user from the connection list when they disconnect.
	    con.onDisconnect().remove();
	    console.log(con.key);
	    userCon = con.key;

	    database.ref("/connections/" + userCon).set(displayName);
	  } // end of "if (snap.val) statement"
	}); //end of snap

	// When first loaded or when the connections list changes...
	connectionsRef.on("value", function(snap) {
	  // The number of online users is the number of children in the connections list.

	  currentPlayers = snap.numChildren();
	  console.log('current players: ' + currentPlayers);
	});


// --------------------------------------------------


})

// =============================================================================

// game-logic
/*1. Random Image appears center page.
2. Timer begins counting down from 30 seconds / or 1 minute. 
3. Each player is able to enter a single word, describing the image, into a form field. When they click ‘submit’, their guess is pushed into a collaborative array of guesses. 
4. If their guess matches a word already in the array (AKA, the other person already guessed the same word) both users get a point.
5. When timer runs out, the game ends. Both users are shown the Array of Guesses.
*/























