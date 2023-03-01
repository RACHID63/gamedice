var joueurGagnant;
var joueurPerdant;
let result;
// Initialiser les variables de score et de toure
var rollinstantané;
var player1TotalScore = 0; // score total sur plusieurs rounds
var player2TotalScore = 0; // score total sur plusieurs rounds
var player1Scoreround = 0; // score par round
var player2Scoreround = 0; // score par round
var currentPlayer = 1;
let joueurActif1;
let joueurActif2;
var roll = 0;
var tablePartie1 = ["parties"];
var tablePartie2 = ["parties"];
var tableScoreCourant1 = [,]; // table scores courant1
var tableScoreCourant2 = [,]; // table scores courant2

// ---évènement sur le bouton hold transfère la sommmes des joueurs dans un tableau----
let dé = document.getElementById("dé");
let tableContainer = document.getElementById("score-table1");
let table2Container = document.getElementById("score-table2");
let titrescore = document.getElementById("titreScore");
let buttonScore = document.getElementById("inject-table1"); // bouton liste des scores courants tanble1
let buttonScore2 = document.getElementById("inject-table2"); // bouton liste des scores courants tanble2
var holdButton = document.getElementById("hold-button");
// --------------------SAISI DES JOUEURS----------------------------------------------
// Référence aux éléments HTML
let boxSaisiJoueurs = document.getElementById("boxJoueurs");
var infoMessage = document.getElementById("message");
var champPlayer1TotalScore = document.getElementById("player1-total-score");
var champPlayer1Scoreround = document.getElementById("player1-round-score");
var champPlayer2TotalScore = document.getElementById("player2-total-score");
var champPlayer2Scoreround = document.getElementById("player2-round-score");
var playButton1 = document.getElementById("roll-dice-button1");
var playButton2 = document.getElementById("roll-dice-button2");

var boxScores = document.getElementById("twinScrores");

// --------------------------------------------------------------------------------------------------------------------------------

// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------
var newGame = document.getElementById("new-game-button");
var tirageJoueur = document.getElementById("validerJoueurActif2");

newGame.addEventListener("click", function () {
  location = "http://127.0.0.1:5503/";
  location.href = location.href;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1Scoreround = 0;
  player2Scoreround = 0;
  champPlayer1TotalScore = " ";
  champPlayer1Scoreround = " ";
  champPlayer2Scoreround = " ";
});
// --------------------LANCE LA PARTIE DE Dé----------------------------------------------

function déLancé(roll) {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

// --------------------SAISI DES JOUEURS----------------------------------------------
document
  .getElementById("validerJoueurActif1")
  .addEventListener("click", function () {
    joueurActif1 = document.getElementById("joueur1").value;
    document.querySelector("#namePlayer1").textContent = joueurActif1;
    var nom1 = document.getElementById("nom1");
    nom1.textContent = joueurActif1;
  });

tirageJoueur.addEventListener("click", function () {
  joueurActif2 = document.getElementById("joueur2").value;
  document.querySelector("#namePlayer2").textContent = joueurActif2;
  var nom2 = document.getElementById("nom2");
  nom2.textContent = joueurActif2;

  // Définit un tableau de joueurs
  let players = ["joueurActif1 ", "joueurActif2"];
  // Sélectionne aléatoirement SUR L'INDEX d'un joueur pour commencer à jouer
  let premierJoueurIndex = Math.floor(Math.random() * players.length);
  let premierJoueur = players[premierJoueurIndex]; // joueur tiré au d=sort
  // Affiche le nom du deuxième joueur
  let deuxiemeJoueur = players[(premierJoueurIndex + 1) % players.length];
  document.getElementById("namePlayer1").value = premierJoueur;
  document.getElementById("namePlayer2").value = deuxiemeJoueur;
  messageTapis = document.getElementById("tapisMesssage")
  messageTapis.textContent = premierJoueur
  alert("Le joueur tiré au sort est : " + premierJoueur);

  if (premierJoueurIndex == 0) {
    alert(
      premierJoueur + "  " + "click sur lancé dé pour commencer la partie  "
    );

    playButton1.addEventListener("click", function () {
      // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel

      var roll = déLancé();
      player1TotalScore += roll;
      champPlayer1Scoreround.textContent = player1TotalScore;
      if (player1TotalScore >= 100) {
        alert("c'est le tour" + "  " + deuxiemeJoueur);
        clickBouton2();
      }

      return roll;
    });
  } else if (premierJoueurIndex == 1) {
    alert(
      deuxiemeJoueur + "  " + "click sur lancé dé pour commencer la partie  "
    );

    playButton2.addEventListener("click", function () {
      // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
      var roll = déLancé();
      player2TotalScore += roll;
      champPlayer2Scoreround.textContent = player2TotalScore;
      if (player2TotalScore >= 100) {
        alert("c'est le tour" + "  " + premierJoueur);

        clickBouton1();
      }
      return [player1TotalScore, player2TotalScore];
    });
  }
});
// --------------------------------------fontions----------------------------------------
let limite1sup100 = function limite1sup100(player1TotalScore) {
  if (player1TotalScore >= 100) {
    alert("c'est le tour" + "  " + deuxiemeJoueur);

    clickBouton2();
  }

  return roll;
};

let limite2sup100 = function limite2sup100(player2TotalScore) {
  if (player2TotalScore >= 100) {
    alert("c'est le tour" + "  " + premierJoueur);

    clickBouton1();
  }

  return roll;
};

clickBouton1 = function clickbouton1() {
  playButton1.addEventListener("click", function () {
    déLancé();
    player1TotalScore += roll;
    champPlayer1Scoreround.textContent = player1TotalScore;
    limite1sup100();
    return player1TotalScore;
  });
};

clickBouton2 = function clickbouton2() {
  playButton2.addEventListener("click", function () {
    déLancé();
    player2TotalScore += roll;
    champPlayer2Scoreround.textContent = player2TotalScore;
    limite2sup100();
    return player2TotalScore;
  });
};
