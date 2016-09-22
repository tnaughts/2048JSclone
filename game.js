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
		gameString += this.gameArray[Math.floor(i/4)][i%4].toString()+",";
		if (i%4 === 3){
			gameString += "\n";
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

Game.prototype.combineRight = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 3; j>= 0; j--){
			if (this.gameArray[i][j] == this.gameArray[i][j-1]){
				this.gameArray[i][j] = this.gameArray[i][j]*2;
				this.gameArray[i][j-1] = 0;
			}
		}
	}
}

Game.prototype.combineUp = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 0; j <3; j++){
			if(this.gameArray[j][i] == this.gameArray[j+1][i]){
				this.gameArray[j][i] = this.gameArray[j][i]*2;
				this.gameArray[j+1][i] = 0;
			}
		}
	}
}

Game.prototype.combineDown = function(){
	for (var i = 0; i <4; i++){
		for (var j = 3; j >0; j--){
			if(this.gameArray[j][i] == this.gameArray[j-1][i]){
				this.gameArray[j][i] = this.gameArray[j][i]*2;
				this.gameArray[j-1][i] = 0;
			}
		}
	}
}

Game.prototype.shiftLeft = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 3; j >= 0; j--){
			if ((j<4)&&(this.gameArray[i][j] != 0) && (this.gameArray[i][j-1]==0)){
				this.gameArray[i][j-1] = this.gameArray[i][j];
				this.gameArray[i][j] = 0;
				j+=2;
			}
		}
	}
}

Game.prototype.shiftRight = function(){
	for (var i = 0; i < 4; i++){
		for (var j = 0; j <4; j++){
			if ((j>=0)&&(this.gameArray[i][j] !=0) && (this.gameArray[i][j+1]==0)){
				this.gameArray[i][j+1] = this.gameArray[i][j];
				this.gameArray[i][j] = 0;
				j-=2;
			}
		}
	}

}
Game.prototype.shiftUp = function(){
	for (var i = 0; i< 4; i++ ){
		for (var j = 3; j> 0; j--){  //not using greater than = because we already check j-1
			if ((j<=3)&&(this.gameArray[j][i] !=0)&& (this.gameArray[j-1][i]== 0)){
				this.gameArray[j-1][i] = this.gameArray[j][i];
				this.gameArray[j][i] =0;
				j+=2;

			}
		}
	}
}

Game.prototype.shiftDown = function(){
	for (var i = 0; i<4; i++){
		for (var j = 0; j<3; j++){
			if((j>=0)&&(this.gameArray[j][i]!=0)&&(this.gameArray[j+1][i]== 0)){
				this.gameArray[j+1][i] = this.gameArray[j][i];
				this.gameArray[j][i] = 0;
				j-=2;
			}
		}
	}
}
	
Game.prototype.moveLeft = function(){
	var firstString = this.toString();
	this.shiftLeft();
	this.combineLeft();
	this.shiftLeft();
	if (firstString != this.toString()){
		this.addNumber();
	}
	if (this.gameOver()){
		console.log("Game Over!");
	}
	
}

Game.prototype.moveRight = function(){
	var firstString = this.toString();
	this.shiftRight();
	this.combineRight();
	this.shiftRight();
	if (firstString != this.toString()){
		this.addNumber();
	}
	if (this.gameOver()){
		console.log("Game Over!");
	}
}

Game.prototype.moveUp = function(){
	var firstString = this.toString();
	this.shiftUp();
	this.combineUp();
	this.shiftUp();
	if (firstString != this.toString()){
		this.addNumber();
	}
	if (this.gameOver()){
		console.log("Game Over!");
	}
}

Game.prototype.moveDown = function(){
	var firstString = this.toString();
	this.shiftDown();
	this.combineDown();
	this.shiftDown();
	if (firstString != this.toString()){
		this.addNumber();
	}
	if (this.gameOver()){
		console.log("Game Over!");
	}
}

Game.prototype.gameOver = function(){
	for(var i = 0; i<4; i++){
		for (var j = 0; j<4; j++){
			if(this.gameArray[i][j]==0){
				return false;
			}
		}
	}
	var tempString = this.gameArray.toString();
	tempGame = new Game();
	tempGame.gameArray = buildFromComplexString(tempString);
	startString = tempGame.toString();
	tempGame.combineUp();
	tempGame.combineDown();
	tempGame.combineRight();
	tempGame.combineLeft();
	endString = tempGame.toString();
	if (startString == endString){
		return true;
	}
	return false;
}

var buildFromComplexString = function(tempString){
	var stringArray = tempString.split(",");
	var tempArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	for(var i = 0; i < 4; i++){
    	for(var j = 0; j < 4; j++){
    		tempArray[i][j] = parseInt(stringArray[i*4+j]);
    	}
    }
    return tempArray;
}


Game.prototype.addNumber = function(){
  var count = 0;
  for (var i = 0; i < 4; i++){
    for(var j =0 ; j < 4; j++){
      if (this.gameArray[i][j] == 0){
        count++;
      }
    }
  }
  console.log(count);
  var rand = Math.floor( Math.random() * count )
  var count = 0;
  for (var i = 0; i < 4; i++){
    for(var j =0 ; j < 4; j++){
      if (this.gameArray[i][j] == 0){
        if (count == rand){
          this.gameArray[i][j] = Math.random() < 0.9 ? 2 : 4;
        }
        count++;
      }
    }
  }
}




// game = new Game("2000220002222000");
// // console.log(game.gameArray);
// console.log(game.toString());
// game.shiftDown();
// console.log(game.toString());
// game.combineUp();
// console.log(game.toString());
// game.shiftUp();
// console.log(game.toString());
