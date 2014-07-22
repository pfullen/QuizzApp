var quiz = {
	
	questions : [],
	answers : [],
	possibleChoices : [],


	init : function() {
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