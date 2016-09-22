$(document).ready(function() {

  var game = new Game()
  // if (localStorage.gameString.length  >= 16){
  //   game.gameArray = buildFromComplexString(localStorage.gameString);
  //   game.score = parseInt(localStorage.gameScore);
  // }
  console.log(game.toString());

  Mousetrap.bind('up', function(){
    game.moveUp();
    console.log(game.toString());
    updateBoard();
    checkOver();
  });

  Mousetrap.bind('down', function(){
    game.moveDown();
    console.log(game.toString());
    updateBoard();
    checkOver();
  });

  Mousetrap.bind('left', function(){
    game.moveLeft();
    console.log(game.toString());
    updateBoard();
    checkOver();
  });

  Mousetrap.bind('right', function(){
    game.moveRight();
    console.log(game.toString());
    updateBoard();
    checkOver();
  });

  var checkOver = function(){
    if (game.gameOver()){
      alert("Game OVER!")
      location.reload();
    }
  }

  var updateBoard = function(){
    var boxArray = $(".box")
    for (var i = 0; i < 4; i++){
      for (var j = 0; j < 4; j ++){
        if (game.gameArray[i][j] == 0){
          boxArray[i*4+j].innerHTML = "";
        }
        else {
          boxArray[i*4+j].innerHTML = game.gameArray[i][j]
        }
      }
    }
    $("#score").text(game.score);
    localStorage.gameString = game.toString();
    localStorage.gameScore = game.score;
  }

  updateBoard();

  $("#new-game").on('click', newGame);

});

var newGame = function(){
  localStorage.gameString = null;
  localStorage.gameScore = null;
  location.reload();
}
