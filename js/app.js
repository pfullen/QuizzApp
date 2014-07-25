 $(document).ready(function(){
	
	



// Quiz Object

function Quiz (){

var i = 0;
this.score =0;
this.answered = 0;
var questionNum = 1;
var newQuestions = Array();






// init method
this.init = function () {

this.loadNextQuestion();
this.handleEvents();

}


//  get Question Method     sets up question object
this.questionObj = function(question, possibleAnswers, correctAnswer) {

this.question = question;
this.possibleAnswers = possibleAnswers;
this.correctAnswer = correctAnswer;



}//   End of get Question Method




//  handle events method
this.handleEvents = function () {
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}

 $(document).on('click', 'input#guessBuutton', function (){
 	this.submitMethod();
 	
 	});
// end of handle events method



// submit event method
   this.submitMethod = function () {
   	   var studentAnswer = $("input:radio[name=Answer]:checked").val();		
			this.validateAnswer (studentAnswer);
			this.loadNextQuestion();
			this.showQuizValues();
		}

// end of submit event method



// display display quiz values message method
this.showQuizValues = function () {
	$('p').html("Qusetion" + answered + "out of " + questions.length);


}

// end of display message method





// validate answer method
this.validateAnswer = function (studentAnswer) {
	this.studentAnswer = studentAnswer;
	console.log("this" + this.studentAnswer);
	if (this.studentAnswer == questions [i][2] ) {
		score++	
	} 
}  // close compareAnswer method





// init  method   - rewrite code to init
this.newQuiz = function () {
 	this.loadNextQuestion();
   this.handleEvents();
	} 
 	  	
 // close newQuiz method




// load question method

this.loadNextQuestion = function (questionNumber) {
	 var newQuestion = this.question;     // This cycles through the questions array and picks the first item in the array which is the question 
	 console.log(newQuestion[0]);
	 console.log(newQuestion[1]);
	 console.log(newQuestion [1][0]);
	 console.log(newQuestion[1,1]);
	 console.log(newQuestion[1,2]);
	 $('#feedback').html(newQuestion[0]);
//	 $('input:radio[name=Answer]').remove();  // remove prior questions possible answers
	$('form').html('<input type="hidden" name "Answer" value="0">');
	for (var x=0;  x < newQuestion[1].length ; x++ ) {     // this loops through the possible answers
		      $('form').append('<input  type = "radio" name="Answer" value="A">' +  newQuestion[1][x] + '<br>');
		      
				}
			console.log(newQuestion[1]);
			i++
			$('form').append('<input type="submit" id="guessButton" class="button" name="submit" value="Submit"/>');

} // end of loadQuestion Method









};  // End of Quiz Object


// Main   

	var questions = Array();
	questions[0] =  ["This is test Question one",   ["A", "B" , "C", "D"], "B"];
	questions[1] =  ["This is test Question two",  ["Z", "X" , "E", "T"], "E"];
	questions[2] =  ["This is test Question Three", ["F", "K" , "L", "D"], "K"];
	questions[3] =  ["This is test Question Four",  ["T", "Q" , "C", "Y"], "T"] ;
	questions[4] =  ["This is test Question Five",  ["R", "W" , "E", "P"], "P"];
	
	
	
	
	var quiz1 = new Quiz();
	
	quiz1.questionObj(questions[1]);

 	quiz1.init();
   
	
});





