let totalScore, roundScore, activePlayer, gamePlaying;
document.querySelector(".firework").style.display = "none";

// initialisation de l’état du jeu et de la définition des valeurs initiales pour diverses variables.
function init() {
  totalScore = [0, 0];
  roundScore = [0, 0];
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(`#joueur1`).style.backgroundColor = "forestgreen";
  document.querySelector(`#joueur2`).style.backgroundColor = "";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(`#joueur1 h2`).textContent = `Joueur 1`;
  document.querySelector(`#joueur2 h2`).textContent = `Joueur 2`;
  document.querySelector(`#joueur1`).classList.add("active");
  document.querySelector(`#joueur2`).classList.remove("active");
  document.querySelector(`#joueur1`).classList.remove("winner");
  document.querySelector(`#joueur2`).classList.remove("winner");
}
// La fonction nextPlayer() change le joueur actif. Si le joueur actif est le joueur 1, la fonction change le joueur actif en joueur 2, et vice versa
// Ensuite, la fonction réinitialise le score temporaire ('roundroundScore) du joueur actif à 0 et met à jour l’affichage du score temporaire pour les deux joueurs à 0. Enfin, la fonction utilise la méthode toggle() pour basculer la classe CSS « active » entre les deux éléments HTML représentant les joueurs, ce qui change l’apparence visuelle du joueur actif.
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore[activePlayer] = 0;

  document.getElementById(`current-0`).textContent = "0";
  document.getElementById(`current-1`).textContent = "0";

  document.querySelector(`#joueur1`).classList.toggle("active");
  document.querySelector(`#joueur2`).classList.toggle("active");

  if (activePlayer === 0) {
    document.querySelector(`#joueur1`).style.backgroundColor = "forestgreen";
    document.querySelector(`#joueur2`).style.backgroundColor = "";
  } else {
    document.querySelector(`#joueur1`).style.backgroundColor = "";
    document.querySelector(`#joueur2`).style.backgroundColor = "forestgreen";
  }
}

// La fonction lance les désrollDice(
// Si la valeur des dés n’est pas 1, la fonction ajoute la valeur des dés au score du tour du joueur actuel et affiche le score mis à jour à l’écran. Il vérifie ensuite si le score total du joueur actuel plus le score du tour est supérieur ou égal à 100. Si c’est le cas, il affiche un message de gagnant, cache l’image des dés, ajoute le 'gagnant
// Si la valeur des dés est 1, la fonction passe au joueur suivant à l’aide du 'nextPlayer
function rollDice() {
  if (gamePlaying) {
    document.querySelector(".firework").style.display = "none";
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.setAttribute("src", `./image/dice-${dice}.jpg`);

    if (dice !== 1) {
      roundScore[activePlayer] += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        roundScore[activePlayer];

      if (totalScore[activePlayer] + roundScore[activePlayer] >= 100) {
        document.querySelector(
          `#joueur${activePlayer + 1} h2`
        ).textContent = `Joueur ${activePlayer + 1} à gagné!`;
        document.querySelector(".dice").style.display = "none";
        document
          .querySelector(`#joueur${activePlayer + 1}`)
          .classList.add("winner");
        document
          .querySelector(`#joueur${activePlayer + 1}`)
          .classList.remove("active");
        gamePlaying = false;
      }
    } else {
      nextPlayer();
    }
  }
}

// Le hold() La fonction est appelée lorsque le joueur actif décide de conserver son score de tour actuel et de l’ajouter au score total. La fonction vérifie d’abord si le jeu est toujours en cours, puis ajoute le score du tour actuel au score total du joueur actif. Le score total est ensuite mis à jour dans le document HTML.
function hold() {
  if (gamePlaying) {
    totalScore[activePlayer] += roundScore[activePlayer];

    document.getElementById(`score-${activePlayer}`).textContent =
      totalScore[activePlayer];

    roundScore[activePlayer] = 0;

    const input = document.querySelector("#final-score").value;
    let winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (totalScore[activePlayer] >= winningScore) {
      document.querySelector(
        `#joueur${activePlayer + 1} h2`
      ).textContent = `Joueur ${activePlayer + 1} a gagné!`;
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(`#joueur${activePlayer + 1}`)
        .classList.add("winner");
      document
        .querySelector(`#joueur${activePlayer + 1}`)
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
}

function startNewGame() {
  init();
}

// Le 'document.querySelectoraddEventListener() méthode.
// Dans ce cas, les trois boutons avec des noms de classebtn-new sont sélectionnés à l’aide de document.querySelector() et des écouteurs d’événement affectés pour l’événement click.
// Lorsque le 'btn-rollrollDice() est appelée. Lorsque l' btn-hold est cliqué, le bouton hold() est appelée. Et lorsque l' btn-new est cliqué, le bouton startNewGame() est appelée.

document.querySelector(".btn-roll").addEventListener("click", rollDice);
document.querySelector(".btn-hold").addEventListener("click", hold);
document.querySelector(".btn-new").addEventListener("click", startNewGame);

document.addEventListener("keypress", function (event) {
  if (event.key === 32 && gamePlaying) {
    // Cela permet au joueur de jouer également au jeu en appuyant sur la barre d’espace
    rollDice();
  }
});

document.querySelector(".btn-hold").addEventListener("click", hold);

document.addEventListener("keypress", function (event) {
  if (event.key === 13 || event.which === 13) {
    hold();
  }
});

$(document).ready(function () {
  $(".nav-link").click(function () {
    if ($(this).attr("gameRulesModal") === "#gameRulesModal") {
      $("#firstModal").modal("show");
    } else if (
      $(this).attr("gamkeyboardCommandsModaleRulesModal") ===
      "#gamkeyboardCommandsModaleRulesModal"
    ) {
      $("#secondModal").modal("show");
    }
  });
});
