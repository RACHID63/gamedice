 // Initialiser les variables de score et de tour
 var player1Score = 0;
 var player2Score = 0;
 var currentPlayer = 1;
 let joueurActif1;
 let joueurActif2;
 var scorecourant1 = 0
 var scorecourant2 = 0
 var winCount = [0, 0];
 // --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------
 document.getElementById("new-game-button").addEventListener("click", function () {
     var player1Score = 0;
     var player2Score = 0;
     joueurActif1 = ""
     joueurActif2 = ""

 });
 // --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------



 // --------------------SAISI DES JOUEURS----------------------------------------------

 document.getElementById("validerJoueurActif1").addEventListener("click", function () {

     joueurActif1 = document.getElementById("joueur1").value;

     document.querySelector("#namePlayer1").textContent = joueurActif1;

     document.getElementById()


 });

 document.getElementById("validerJoueurActif2").addEventListener("click", function () {
     joueurActif2 = document.getElementById("joueur2").value;
     document.querySelector("#namePlayer2").textContent = joueurActif2;
 });

 // --------------------SAISI DES JOUEURS----------------------------------------------

 // Référence aux éléments HTML
 var infoMessage = document.getElementById("message");
 var player1Total = document.getElementById("player1-total-score");
 var player1Current1 = document.getElementById("player1-round-score");
 var player2Total = document.getElementById("player2-total-score");
 var player2Current = document.getElementById("player2-round-score");
 var playButton = document.getElementById("roll-dice-button");
 var hold1 = document.getElementById("hold1");
 var hold2 = document.getElementById("hold2");
 var newGame = document.getElementById("new-game-button");

 // Ajout d'événements pour les boutons
 //  hold1.addEventListener("click", holdScore1);
 //  hold2.addEventListener("click", holdScore2);
 //  newGame.addEventListener("click", newGame);

 playButton.addEventListener("click", function rollDice() {
    // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
    //  var roll = Math.floor(Math.random() * 6) + 1;   
      var roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("player1-round-score").innerHTML = roll
    rollinfo = joueurActif1 + " a sorti: " + roll;
    document.querySelector("#message").textContent = rollinfo
   //  player1Current1 = player1Current1 + roll
    
   //  document.getElementById("player2-round-score").textContent = player1Current

    // si le joueur actuel a roulé 1, passer le tour au joueur suivant
    if (roll === 1) {
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        document.querySelector("#message").textContent = currentPlayer
        document.querySelector("#message").textContent = roll
        var roll = Math.floor(Math.random() * 6) + 1;
        document.getElementById("player2-round-score").textContent = roll
        rollinfo = joueurActif2 + " a sorti: " + roll;
        document.querySelector("#message").textContent = "Tour du joueur " + currentPlayer
        document.querySelector("#message").textContent = rollinfo
        //  alert("Tour du joueur " + currentPlayer);
        resetScore();
        return;
    }
    // Sinon ajouter le score à la variable score totale
    else {
        if (currentPlayer === 1) player1Current.innerHTML = roll;
        else player2Current.innerHTML = roll;
    }
});
 


 function getRandomInt(max) {
     return Math.floor(Math.random() * max);
 }