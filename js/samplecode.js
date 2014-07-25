var questions = Array();
var player;

$(document).ready(function () {
	// button to start/restart quiz
	$(".start").click(function () {
		$(".intro").hide();
		$(".finish").hide();
		$(".game").show();
		$(".score").css('display', 'inline-block');
		
		player = new Player();
		
		showGameValues();
		showQuestion(player.answered);
	});
	
	// click on image
	$(".actors").click(function () {
		var selected = +$(this).data("image");
		
		// check answer
		if (selected === questions[player.answered].correctAns) {
			$("#correct").show().delay(400).fadeOut();
			player.score++;
		} else {
			$("#wrong").show().delay(400).fadeOut();
		}

		player.answered++;
		
		// check to see if last question
		if (player.answered < questions.length) {
			showGameValues();
			showQuestion(player.answered);
		} else {
			$(".game").hide();
			$(".score").hide();
			$(".finish").show();
			showGameValues();
			
			var response = "";
			if (player.score === questions.length) {
				response = "Fantastic, you know your stuff";
			} else if (player.score === 0) {
				response = "You are better off guessing!?!";
			} else {
				response = "Well Done";
			}
			$("#response").text(response);
		}
	});
});

// Questions objects: array of film names, array of possible answers images and correct answer index
function Question (films, answers, correctAns) {
	this.films = films;
	this.answers = answers;
	this.correctAns = correctAns;
}

// Player object: score and question answered
function Player () {
	this.score = 0;
	this.answered = 0;
}

// update the pages with values
function showGameValues () {
	$(".score-value").text(player.score);
	$("#answered").text(1 + player.answered);
	$(".numQuestions").text(questions.length);
}

// show question and answers
function showQuestion (questionNumber) {
	for (var i=0; i < questions[questionNumber].films.length; i++) {
		$("#film" + i).text(questions[questionNumber].films[i]);
	}
	
	for (var i=0; i < questions[questionNumber].answers.length; i++) {
		$("#photo" + i).attr("src", "images/" + questions[questionNumber].answers[i]);
	}
}


//---- data ----
questions[0] = new Question(
	["Charlie and the Chocolate Factory", "Pirates of the Caribbean: The Curse of the Black Pearl", "Sleepy Hollow"],
	["ChristinaRicci.jpg", "HelenaBonhamCarter.jpg", "JohnnyDepp.jpg", "OrlandoBloom.jpg"],
	2
);

questions[1] = new Question(
	["Blazing Saddles","Stir Crazy","See No Evil, Hear No Evil"],
	["GeneWilder.jpg","JoBethWilliams.jpg","MelBrooks.jpg","RichardPryor.jpg"],
	0
);

questions[2] = new Question(
	["Gone in Sixty Seconds","Girl, Interrupted","Mr. & Mrs. Smith"],
	["AngelinaJolie.jpg","BradPitt.jpg","NicolasCage.jpg","WinonaRyder.jpg"],
	0
);

questions[3] = new Question(
	["12 Years a Slave","Salt","Serenity"],
	["NathanFillion.jpg","BradPitt.jpg","AngelinaJolie.jpg","ChiwetelEjiofor.jpg"],
	3
);

questions[4] = new Question(
	["The Devil's Advocate","Monster","Snow White and the Huntsman"],
	["AlPacino.jpg","CharlizeTheron.jpg","ChristinaRicci.jpg","KristenStewart.jpg"],
	1
)