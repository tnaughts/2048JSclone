describe("an initial default game", function(){
	var game;
	it("has a defualt game setup", function(){
		game = new Game();
		expect(game.gameArray).toEqual([[0,0,0,0], [2,0,2,0], [0,0,0,0], [0,0,0,0]]);
	})
})