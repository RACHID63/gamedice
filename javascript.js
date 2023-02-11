var joueurGagnant ;
var joueurPerdant ;
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
var hold = document.getElementById("hold-button");
// --------------------SAISI DES JOUEURS----------------------------------------------
// Référence aux éléments HTML
let boxSaisiJoueurs = document.getElementById("boxJoueurs");
var infoMessage = document.getElementById("message");
var champPlayer1TotalScore = document.getElementById("player1-total-score");
var champPlayer1Scoreround = document.getElementById("player1-round-score");
var champPlayer2TotalScore = document.getElementById("player2-total-score");
var champPlayer2Scoreround = document.getElementById("player2-round-score");
var playButton = document.getElementById("roll-dice-button");
var boxScores = document.getElementById("twinScrores");
// -----------------------------------------condition sur jours---------------------------------------------------------------
var conditionJoueur = function (joueurGagnant,joueurActif1,joueurActif1 ) {
  if ((joueurGagnant = joueurActif1)) {
    player1Scoreround = player1Scoreround + roll;
    // jortie jet de dé instantanée
    var rollinstantané = joueurActif1 + " a sorti: " + roll;
    document.querySelector("#message").textContent = rollinstantané;
    //   sommes score courant
    champPlayer1Scoreround.textContent = player1Scoreround;
    tableScoreCourant1.push(roll);
    console.table(tableScoreCourant1);
    tableScoreCourant1.push(roll);
    // si le joueur actuel a roulé 1, passer le tour au joueur suivant
    if (roll === 1) {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      document.querySelector("#message").textContent = currentPlayer;
      document.querySelector("#message").textContent = rollinstantané;
      // comptabilise les scores joués
      tableScoreCourant2.push(roll);
      player2Scoreround = player2Scoreround + roll;
      // sortie jet de dé instantanée
      rollinstantané = joueurActif2 + " a sorti: " + roll;
      document.querySelector("#message").textContent = rollinstantané;
      //   sommes score courant
      document.getElementById("player2-round-score").innerHTML =
        player2Scoreround;
      tableScoreCourant2.push(roll);
    }
    // Sinon ajouter le score à la variable score totale pour 
    else {
      player1Scoreround = player1Scoreround + roll;
      // jortie jet de dé instantanée pour joueurActif2
      rollinstantané = joueurActif2 + " a sorti: " + roll;
      document.querySelector("#message").textContent = rollinstantané;
      //   sommes score courant
      champPlayer1Scoreround.textContent = player2Scoreround;
      tableScoreCourant2.push(roll);
      console.table(tableScoreCourant2);
      // tableScoreCourant1.push(roll);
    }
  }
  return [player1Scoreround, player2Scoreround, tableScoreCourant1, tableScoreCourant2];
};
// ----------------------------------------------------------------------------------------
// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------
var newGame = document.getElementById("new-game-button");
var tirageJoueur = document.getElementById("validerJoueurActif2");

newGame.addEventListener("click", function () {

  location = "http://127.0.0.1:5503/";
  location.href = location.href;
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

tirageJoueur.addEventListener("click", function (joueurGagnant) {
  joueurActif2 = document.getElementById("joueur2").value;
  document.querySelector("#namePlayer2").textContent = joueurActif2;
  var nom2 = document.getElementById("nom2");
  nom2.textContent = joueurActif2;
  var joueurGagnant = Math.random() < 0.5 ? joueurActif1 : joueurActif2;
  joueurPerdant = joueurGagnant === joueurActif1 ? joueurActif2 : joueurActif1;
  document.getElementById("namePlayer1").value = joueurGagnant;
  document.getElementById("namePlayer2").value = joueurPerdant;
  console.log("Le joueur tiré au sort est : " + joueurGagnant);
  console.log("Le joueur tiré au sort est : " + joueurPerdant);
  alert("Le joueur tiré au sort est : " + joueurGagnant);

  if (joueurGagnant == joueurActif1) {

    alert( joueurGagnant + "appuye sur lzncé dé pour commencer la partie  " )

    playButton.addEventListener("click", function rollDice(joueurActif1,joueurActif2) {
        // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
        var roll = déLancé();
        conditionJoueur(joueurActif1,joueurActif1);
        return  roll  ;
      });
   
  } else if (joueurGagnant == joueurActif2) {
    alert( joueurGagnant + "commence la partie")
    playButton.addEventListener("click", function rollDice(joueurActif1,joueurActif2) {
      // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
      var roll = déLancé();
      conditionJoueur();
      return  roll  ;
    });
   
  }
  
  return [roll,player1Scoreround, player2Scoreround, player1TotalScore, player2TotalScore];
});

