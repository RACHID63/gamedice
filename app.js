let scores, roundScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector(`#joueur1 h2`).textContent = `Joueur 1`;
  document.querySelector(`#joueur2 h2`).textContent = `Joueur 2`;
  document.querySelector(`#joueur1`).classList.add('active');
  document.querySelector(`#joueur2`).classList.remove('active');
  document.querySelector(`#joueur1`).classList.remove('winner');
  document.querySelector(`#joueur2`).classList.remove('winner');
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector(`#joueur1`).classList.toggle('active');
  document.querySelector(`#joueur2`).classList.toggle('active');
}

function rollDice() {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;

    const diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.setAttribute('src', `./image/dice-${dice}.jpg`);

    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}

function hold() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    const input = document.querySelector('.final-score').value;
    let winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector(`#joueur${activePlayer + 1} h2`).textContent = `Joueur ${activePlayer + 1} a gagné!`;
      document.querySelector('.dice').style.display = 'none';
      document.querySelector(`#joueur${activePlayer + 1}`).classList.add('winner');
      document.querySelector(`#joueur${activePlayer + 1}`).classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
}

function startNewGame() {
  init();
}

init();
document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', startNewGame);
