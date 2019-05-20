describe("Fizzbuz",function(){
  beforeEach(function(){
    game = new Game;
  })
  it("If the number is devisible by 3, the output is fizz",function(){
    expect(game.fizzBuzz(3)).toEqual("fizz")
  })

  it("If the number is devisible by 5, the output is buzz",function(){
    expect(game.fizzBuzz(5)).toEqual("buzz")
  })

  it("if the number is devisible by 15, the output is fizzbuzz",function(){
    expect(game.fizzBuzz(15)).toEqual("fizzbuzz")
  })
})
