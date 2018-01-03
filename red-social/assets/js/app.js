
//Firebase

var config = {
    apiKey: "AIzaSyAVbjIYJMkmhNLHinmsiMR5dbbVBScUTqQ",
    authDomain: "red-social-spring3.firebaseapp.com",
    databaseURL: "https://red-social-spring3.firebaseio.com",
    projectId: "red-social-spring3",
    storageBucket: "",
    messagingSenderId: "949348878375"
  };
  firebase.initializeApp(config);

//Modal

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });