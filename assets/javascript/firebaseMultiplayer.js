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

var player1Ref = database.ref('/player1');
var player2Ref = database.ref('/player2');

database.ref().on('value', function (snapshot) {
	console.log(snapshot.val());

	player1Ref.set({
		name: 'no one',
		points: 0
	})

	player2Ref.set({
		name: 'no one',
		points: 0
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

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snapshot) {

  if (snapshot.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }

});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snapshot) {

});







