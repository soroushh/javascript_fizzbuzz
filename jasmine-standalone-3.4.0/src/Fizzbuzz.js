function Game(){

}
Game.prototype.fizzBuzz = function(number){
  if(number%3 === 0){
    return("fizz")
  } else if (number%5 === 0){
    return("buzz")
  }

}
