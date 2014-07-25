 $(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



var quiz = {
	
	questions : [],
	answers : [],
	possibleChoices : [],

  
	init: function() {
		this.loadNextQuestion();
		this.handleEvents();
	}, 
	
	loadNextQuestion : function() {
		
		// perform logic
		// newQuestionObject is supposed to be created here
		

		this.setupQuestionForm(newQuestionObject);
	},

	setupQuestionForm : function() {
		// create form here
	},
	
	validateAnswer : function() {
		return true; // or false, the answere
	},

	submitEventHandler : function() {
		if (this.validateAnswer()) {
			// add to correct answer
		}
		//

		//check if its the last question
		// else
		this.loadNextQuestion();
	}
	
	handleEvents : function() {
		// event handlers
			//submit button
	},

	displayMessage : function(){
		// display mesage here
	}
}

quiz.init();

});













// Quiz Object
/*
function Quiz (studentAnswer){

this.studentAnswer = studentAnswer;



var question = ["Test Question 1", "Test Question 2",
 					"Test Question 3" , "Test Question 4",
 					"Test Question 5"];
										
var correctAnswer = ["A", "p", "L", "*" , "g"];								
			
var possibleAnswers = [["A", "B", "C", "D"] ,["z","p","q","t"], ["0","8","L","s"],["B","7","*","+"],["g","w","g","v"]];


// Compare answer method
this.compareAnswer = function () {
	console.log("the student answer in the object is " + studentAnswer);
	console.log("The correct anawer in the object is " + correctAnswer[i]);
	console.log("this" + this.studentAnswer);
	if (this.studentAnswer == correctAnswer[i] ) {
		return 1;	
	} else {
		return 0;
	}
}  // close compareAnswer method

// new quiz method
this.newQuiz = function () {
 	
 	location.reload(); 
 	
 }; // close newQuiz method


// load question method

this.loadQuestion = function () {
	
var nextQuestion = question[i];
var nextAnswers = possibleAnswers[i];

i++
return [nextQuestion ,nextAnswers, i];

} // end of loadQuestion Method


};  // End of Quiz Object






	 
 //  *************Main code*************
    
    // initalize variables   & get first question on page load  
    var i = 0;
    var questionNum = 1;
   
    var question = "";
    var possibleAnswers = "";
   
    var studentAnswer;


   
    $('#feedback').html(question[i]);
    var numCorrect =0;
     
  
     


// refresh page when when users clicks new game button
 $('.new').click(function () {
 	
 	quiz1.newQuiz();
 
 	
 });


// Prevent default page refresh when submit is clicked
$('form').submit(function(event){ 
  			 event.preventDefault(); 
  			
       //   console.log(guessCount);

})

//  get the students answer and compare it to actual answer
//$('input#guessButton').click(function () {
		$(document).on('click', 'input#guessBuutton', function (){
		 
		
				 studentAnswer = $("input:radio[name=Answer]:checked").val();			 
			 	console.log("TEst student Answer" + studentAnswer);
          
         console.log(studentAnswer);
       if (studentAnswer != ""  ){      
        var quiz1 = new Quiz(studentAnswer);
     		var result = quiz1.compareAnswer();
          console.log("This is the result" + result);
         
			if (result == 0) {
			console.log("incorrect");
			
			}  else if (result == 1){
				console.log("correct");
           numCorrect++  ;        
          
          }
   }
          
			var loadNext = quiz1.loadQuestion( );
         question = loadNext[0];
         possibleAnswers = loadNext[1];
         var index = loadNext[2];
         console.log("you clicked submit");
          $('#feedback').html(question);
         // $('form').text("");
          $('input:radio[name=Answer]').remove();
          
          $('form').html('<input type="hidden" name "Answer" value="0">' +  
				'<input  type = "radio" name="Answer" value="A">' +  possibleAnswers[0] + '<br>' +
				'<input type = "radio" name="Answer" value="B">' + possibleAnswers[1] + '<br>' +
				'<input  type = "radio" name="Answer" value="C">' + possibleAnswers[2]  + '<br>' +
				'<input  type = "radio" name="Answer" value="D">' + possibleAnswers [3]  + '<br>' +
				'<input type="submit" id="guessButton" class="button" name="submit" value="Submit"/>' ); 
      
      		
      	$('span').html(index);
      	console.log("the index is " + index);


		
          console.log(question);
          console.log(possibleAnswers);
          
          
         
          });
         */ 
          
       quiz.init();
        });










