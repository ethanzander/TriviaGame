
$( document ).ready(function() {
//Variables
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(fiveSeconds, 1000 * 5);


// Set Game values
var number = 30;
var intervalId;

//Set all Functions

// function tenSeconds() {
// 	if (number === 10) {
//   		$('#time-left').html("<h3>You have 10 seconds left!</h3>");
//   	}
// }
// function fiveSeconds() {
// 	if (number === 5) {}
//   		$('#time-left').html("<h3>You have 5 seconds left!</h3>");
//   	}
// }
// function timeUp() {
// 	if (number === 0) {}
//   		$('#time-left').html('<h3>Your time is UP!</h3>');
//   	}
// }
function run() {
  if (!intervalId) {
    intervalId = setInterval(decrement, 1000);
  };
  document.getElementById("questions").style.visibility = "visible";
}
function decrement() {
  number--;
  $("#show-number").html("<h1>" + number + "</h1>");
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
}
function check() {
  clearInterval(intervalId);
  intervalId = undefined;
  document.getElementById("after-submit").style.visibility = "visible";
  var quetsion1 = document.quiz.quetsion1.value;
  var quetsion2 = document.quiz.quetsion1.value;
  var quetsion3 = document.quiz.quetsion1.value;
  var quetsion4 = document.quiz.quetsion1.value;
  var quetsion5 = document.quiz.quetsion1.value;
  var quetsion6 = document.quiz.quetsion1.value;
  var correct = 0;

  if (quetsion1 == "Baton") {
    correct++;
  }
  if (question2 == "Elton John") {
    correct++;
  }
  if (question3 == "Michael Heseltine") {
    correct++;
  }
  if (quetsion4 == "7") {
    correct++;
  }
  if (question5 == "Names") {
    correct++;
  }
  if (question6 == "Roberts") {
    correct++;
  }

var messages = ["Great Job!", "You did OK.", "OUCH!"]

var range;
  if (correct < 1) {
    range=2;
  }
  if (correct > 1 && correct < 4) {
    range = 1;
  }
  if (correct > 4) {
    range = 0;
  }
document.getElementById("after-submit").style.visibility = "visible";
document.getElementById("message").innerHTML=messages[range];
document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
}

  // alert("Your Results");

// Game logic
$('#show-number').html('<h1>30</h1>');
$('#start-button').on("click", function(){
  run();
});
$('#finished').on("click", function(){
  stop();
  check();
});

//End document.ready
});



