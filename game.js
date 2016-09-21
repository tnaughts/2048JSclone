var Game = function(gameSetup){
	gameSetup = gameSetup || "0000202000000000";
	this.gameArray = [[0,0,0,0], [2,0,2,0], [0,0,0,0], [0,0,0,0]]; //creates 2d array
	var gameLength = gameSetup.length
	for (var i = 0; i<gameLength; i++){
		this.gameArray[Math.floor(i/4)][i%4] = parseInt(gameSetup.charAt(i)); //creates 2d array
	}
}

Game.prototype.toString = function(){
	var gameString = "";
	for (var i = 0; i < 16; i++) {
		gameString += this.gameArray[Math.floor(i/4)][i%4].toString();
		if (i%4 === 3){
			gameString += "\n";
		}
		else {
			gameString += ",";
		}
	}
	return gameString;
}

game = new Game();
console.log(game.gameArray);
console.log(game.toString());
