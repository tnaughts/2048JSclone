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

Game.prototype.combineLeft = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 0; j < 4; j++){
			if (this.gameArray[i][j] == this.gameArray[i][j+1]){
				this.gameArray[i][j] = this.gameArray[i][j] * 2;
				this.gameArray[i][j+1] = 0;
			}
		}
	}
}

Game.prototype.shiftLeft = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 3; j >= 0; j --){
			if ((j<4)&&(this.gameArray[i][j] != 0) && (this.gameArray[i][j-1]==0)){
				this.gameArray[i][j-1] = this.gameArray[i][j];
				this.gameArray[i][j] = 0;
				j+=2
			}
		}
	}
}
Game.prototype.moveLeft = function(){
	this.shiftLeft();
	this.combineLeft();
	this.shiftLeft();
	
}

game = new Game();
console.log(game.gameArray);
console.log(game.toString());
game.moveLeft();
console.log(game.toString());
