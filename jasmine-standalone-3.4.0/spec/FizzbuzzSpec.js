describe("Fizzbuz",function(){
  it("If the number is devisible by 3, the output is fizz",function(){
    game = new Game()
    expect(game.fizzBuzz(3)).toEqual("fizz")
  })
})
