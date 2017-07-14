
$( document ).ready(function() {
//Variables
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(fiveSeconds, 1000 * 5);


// Set Game values
var number = 30;
var intervalId;

//Set all Functions

function tenSeconds() {
	if (number === 10) {
  		$('#time-left').html("<h3>You have 10 seconds left!</h3>");
  	}
}
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
  }
}
function decrement() {
  number--;
  $("#show-number").html("<h1>" + number + "</h1>");
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
}
function stop() {
  clearInterval(intervalId);
  intervalId = undefined;
}

  // alert("Your Results");

// Game logic
$('#show-number').html('<h1>30</h1>');
$('#start-button').on("click", function(){
  run();
});
$('#finished').on("click", function(){
  stop();
});

//End document.ready
});



