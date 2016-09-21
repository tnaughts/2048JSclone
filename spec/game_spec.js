describe("Setting up and initial game", function(){
	var game;
	it("has a defualt game setup", function(){
		game = new Game();
		expect(game.gameArray).toEqual([[0,0,0,0], [2,0,2,0], [0,0,0,0], [0,0,0,0]]);
	})
	it("can have a custom game setup", function(){
		game = new Game("0000202000000022");
		expect(game.gameArray).toEqual([[0,0,0,0], [2,0,2,0], [0,0,0,0], [0,0,2,2]])
	})
})