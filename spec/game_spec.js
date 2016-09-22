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
describe("Moving Left", function(){
	var game;
	it("combines 2 numbers next to each other in a row that are equivalent to the left and in the same row", function(){
		game = new Game("0000220000000000");
		game.combineLeft();
		expect(game.gameArray).toEqual([[0,0,0,0], [4,0,0,0], [0,0,0,0], [0,0,0,0]])
	})
	it("combines 2 numbers next to each other in a row that are equivalent to the left and in the same row does not combine other rows ", function(){
		game = new Game("0002220000000000");
		game.combineLeft();
		expect(game.gameArray).toEqual([[0,0,0,2], [4,0,0,0], [0,0,0,0], [0,0,0,0]])
	})
	it("shifts numbers to the left if there is a 0 in the space to the left", function(){
		game = new Game("0000202000000022");//will check edge cases where there are numbers in the greatest indexes
		game.shiftLeft();
		expect(game.gameArray).toEqual([[0,0,0,0], [2,2,0,0], [0,0,0,0], [2,2,0,0]])

	})
	it ("combines and shifts numbers to the left", function(){
		game = new Game("0000242200004022")
		game.moveLeft();
		expect(game.gameArray).toEqual([[0,0,0,0], [2,4,4,0], [0,0,0,0], [4,4,0,0]])
	})
})

describe("Moving Right", function(){
	var game;
	it("combines 2 numbers next to each other in a row that are equivalent", function(){
		game = new Game("0002220002220000");
		game.combineRight();
		expect(game.gameArray).toEqual([[0,0,0,2], [0,4,0,0], [0,2,0,4], [0,0,0,0]])

	})
	it("shifts numbers to the right", function(){
		game = new Game("2000220002222000");
		game.shiftRight();
		expect(game.gameArray).toEqual([[0,0,0,2], [0,0,2,2], [0,2,2,2], [0,0,0,2]])

	})
	it("combines and shifts numbers to the right", function(){
		game = new Game("2000220002222000");
		game.moveRight();
		expect(game.gameArray).toEqual([[0,0,0,2], [0,0,0,4], [0,0,2,4], [0,0,0,2]])

	})
})

describe("Moving Up", function(){
	var game;
	it("combines 2 numbers upwards that are equivalent", function(){
		game = new Game("2000220002222000");
		game.combineUp();
		expect(game.gameArray).toEqual([[4,0,0,0], [0,4,0,0], [0,0,2,2], [2,0,0,0]])
	})
	it("shifts all numbers upwards", function(){
		game = new Game("2000220002222000");
		game.shiftUp();
		expect(game.gameArray).toEqual([[2,2,2,2], [2,2,0,0], [2,0,0,0], [0,0,0,0]])
	})
	it("shifts and combines numbers upwards", function(){
		game = new Game("2000220002222000");
		game.moveUp();
		expect(game.gameArray).toEqual([[4,4,2,2], [2,0,0,0], [0,0,0,0], [0,0,0,0]])
	})
})

describe("Moving down", function(){
	var game;
	it("combines 2 numbers downwards that are equivalent", function(){
		game = new Game("2000220002222000");
		game.combineDown();
		expect(game.gameArray).toEqual([[0,0,0,0], [4,0,0,0], [0,4,2,2], [2,0,0,0]])

	})
	it("shifts numbers downwards", function(){
		game = new Game("2000220002222000");
		game.shiftDown();
		expect(game.gameArray).toEqual([[0,0,0,0], [2,0,0,0], [2,2,0,0], [2,2,2,2]])

	})
	it("shifts and combines like numbers downwards", function(){
		game = new Game("2000220002222000");
		game.moveDown();
		expect(game.gameArray).toEqual([[0,0,0,0], [0,0,0,0], [2,0,0,0], [4,4,2,2]])

	})

})
describe("Game over", function(){
	var game;
	it("returns true when no more moves can be made", function(){
		game = new Game("1234567891234567")
		expect(game.gameOver()).toBeTruthy();
	})
	it("returns false when no more moves can be made", function(){
		game = new Game("226789112345678")
		expect(game.gameOver()).toBeFalsy();
	})
})



