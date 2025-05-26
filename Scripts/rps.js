let score =JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
}

let playerChoice = '';
let computerChoice = '';
let outcome = '';
function play(choice) {
const randomNumber = Math.floor(Math.random() * 3);
const choices = ['rock', 'paper', 'scissors'];
computerChoice = choices[randomNumber];
if(choice === computerChoice) {
    outcome = 'It\'s a tie!';
    score.ties++;
} else if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
) {
    outcome = 'You win!';
    score.wins++;
} else {
    outcome = 'You lose!';
    score.losses++;
}
localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.js-result').innerHTML = outcome;
document.querySelector('.js-move')
    .innerHTML =
    `You
    <img class="rps-icon" src="Images/${choice}-emoji.png">
    <img class="rps-icon" src="Images/${computerChoice}-emoji.png"> 
    <img class="rps-icon" src="Images/Robot-emoji.png">`;
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
score.wins = 0;
score.losses = 0;
score.ties = 0;
localStorage.removeItem('score');
document.querySelector('.js-result').innerHTML = '';
document.querySelector('.js-move').innerHTML = '';
document.querySelector('.js-score').innerHTML = '';
}