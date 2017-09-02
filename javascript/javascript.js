// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUpPm3dU-vknCmRd6llCDFfto-e7nlTMw",
    authDomain: "train-scheduler-bc78f.firebaseapp.com",
    databaseURL: "https://train-scheduler-bc78f.firebaseio.com",
    projectId: "train-scheduler-bc78f",
    storageBucket: "train-scheduler-bc78f.appspot.com",
    messagingSenderId: "964709272987"
  };

  firebase.initializeApp(config);

  //initial variables
  var trainName = "";
  var destination = "";
  var firstTrainTime = 0; //time. not sure in what format yet
  var frequency = 0; //time in minutes


  //variable that references firebase.database
  var database = firebase.database();


  $("#submit-button").on("click", function(event){
  	//prevents form from submitting before all info is entered in
  	event.preventDefault();


  	






  })

