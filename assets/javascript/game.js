$(document).ready(function() {

	//some variables to be declared
	var initialized = false;
	var charChosen = false;
	var enemyChosen = false;
	var yourChar;
	var yourEnemy;
	var isTrue = true;


	//starting health totals

	$("#han-solo-image").attr({"data-health" : 140, "data-attack" : 10, "data-counter" : 10});
	$("#yoda-image").attr({"data-health" : 120, "data-attack" : 12, "data-counter" : 15});
	$("#darth-vader-image").attr({"data-health" : 200, "data-attack" : 12, "data-counter": 6});
	$("#boba-fett-image").attr({"data-health": 130, "data-attack" : 11, "data-counter" : 11});


	//on click function
	$(".start-btn").on("click", function() {
		if(!charChosen) {
			charChosen = true;
			yourChar = $(this);
			$("#char-placement").html(yourChar);

			var options = $("#characters");
			$("#enemy-options").html(options);
		}
	});

	$("#enemy-options").on("click", function() {
			if($("#enemy-options") !== $(yourChar)) {
				console.log($(this));
			yourEnemy = $(this);
			$("#defender-placement").html(yourEnemy);
			$("#your-placement").html(yourChar);
		}
	});


});