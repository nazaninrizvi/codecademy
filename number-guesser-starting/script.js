let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
  return Math.floor(Math.random() * 10);
}
// Write your code below:
function getAbsoluteDistance(guess, target){
  return Math.abs(target - guess);
}

function isValid(human, compGuess)
{
  if(human < 0 || compGuess < 0 || human >9 || compGuess > 9){
        alert("Your number is out of range");
    }
}


function compareGuesses(human, compGuess, target){
  if(isValid(human, compGuess)){
  human = getAbsoluteDistance(human, target);
  compGuess = getAbsoluteDistance(compGuess, target);
  if(compGuess > human){
      return true;
  }else{
      return false;
  }
  }
}
function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }else{
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber +=1;
}
