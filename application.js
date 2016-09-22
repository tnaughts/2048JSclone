$(document).ready(function() {
	var game = new Game()
	if (localStorage.gameString.length >= 16){
		game.gameArray = buildFromComplexString(localStorage.gameString);
		game.score = parseInt(localStorage.gameScore);
	}


});