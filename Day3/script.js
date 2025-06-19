let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['stone', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = `It's a draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    userScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `You: ${userScore} | Computer: ${computerScore}`;
}
