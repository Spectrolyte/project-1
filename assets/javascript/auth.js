  // Initialize Firebase
var config = {
apiKey: "AIzaSyAKovIgnElTXfZog6-eGf7X3vU1I7go6yI",
authDomain: "imagewordmatch.firebaseapp.com",
databaseURL: "https://imagewordmatch.firebaseio.com",
projectId: "imagewordmatch",
storageBucket: "imagewordmatch.appspot.com",
messagingSenderId: "621229379920"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const txtEmail = $('txtEmail');
const txtPassword = $('txtPassword');


auth.signInWithEmailAndPassword(email, pass);

auth.createUserWithEmailandPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => { });
