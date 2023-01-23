// Initialiser les variables de score et de tour
var player1Score = 0;
var player2Score = 0;
var currentPlayer = 1;
let joueurActif1;
let joueurActif2;
var scorecourant1 = 0;
var scorecourant2 = 0;
var tablePartie1 = ["parties" , ];
var tablePartie2 = ["parties" , ];
var tableScore1 = [ , ];
var tableScore2 = [ , ];

// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------
// document
//   .getElementById("newGameButton")
//   .addEventListener("click", function () {
//     player1Score = 0;
//     player2Score = 0;
//     joueurActif1 = "";
//     joueurActif2 = "";
//     scorecourant1 ="0";
//     scorecourant2 = "0";
//     player1Total ="0"
//     scorecourant1.textContent =""

  // });
// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------

// --------------------SAISI DES JOUEURS----------------------------------------------

document
  .getElementById("validerJoueurActif1")
  .addEventListener("click", function () {
    joueurActif1 = document.getElementById("joueur1").value;
    document.querySelector("#namePlayer1").textContent = joueurActif1;
  });

document
  .getElementById("validerJoueurActif2")
  .addEventListener("click", function () {
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
var hold = document.getElementById("hold-button");
var newGame = document.getElementById("new-game-button");

// Ajout d'événements pour les boutons
//  hold1.addEventListener("click", holdScore1);
//  hold2.addEventListener("click", holdScore2);
//  newGame.addEventListener("click", newGame);

// --------------------LANCE LA PARTIE DE Dé----------------------------------------------

playButton.addEventListener("click", function rollDice() {
  // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
  var roll = Math.floor(Math.random() * 6) + 1;
  player1Score = player1Score + roll;
  // jortie jet de dé instantanée
  rollinfo = joueurActif1 + " a sorti: " + roll;
  document.querySelector("#message").textContent = rollinfo;
  //   sommes score courant
  document.getElementById("player1-round-score").innerHTML = player1Score;
  tableScore1.push(roll);
  console.table(tableScore1)
  tableScore2.push(roll);
  //  document.getElementById("player2-round-score").textContent = player1Current

  // si le joueur actuel a roulé 1, passer le tour au joueur suivant
  if (roll === 1) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.querySelector("#message").textContent = currentPlayer;
    document.querySelector("#message").textContent = rollinfo;
    var roll = Math.floor(Math.random() * 6) + 1;
    // comptabilise les scores joués
  tableScore2.push(roll);
    player2Score = player2Score + roll;
    // jortie jet de dé instantanée
    rollinfo = joueurActif2 + " a sorti: " + roll;
    document.querySelector("#message").textContent = rollinfo;
    //   sommes score courant
  document.getElementById("player2-round-score").innerHTML = player2Score;
  tableScore2.push(roll);
    // document.getElementById("player2-round-score").textContent = roll;
    // rollinfo = joueurActif2 + " a sorti: " + roll;
    // document.querySelector("#message").textContent =
    //   "Tour du joueur " + currentPlayer;
    // document.querySelector("#message").textContent = rollinfo;
    // resetScore();
    return;
  }
  // Sinon ajouter le score à la variable score totale
  else {
    if (currentPlayer === 1) player1Current1.innerHTML = player1Score;
    else player2Current.innerHTML = player2Score;
  }
});

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }


  // ---évènement sur le bouton hold transfère la sommmes des joueurs dans un tableau----
  let dé =document.getElementById("dé");
  let tableContainer = document.getElementById("score-table");
let table2Container = document.getElementById("score2-table2");
let titrescore = document.getElementById("titreScore");
let buttonScore = document.getElementById("inject-table");

  hold.addEventListener("click", function () {
    dé.style.display = "none"
    tablePartie1.push(player1Score)
    tablePartie2.push(player2Score)
    console.log(tablePartie1)
    console.log(tablePartie2)
    player1Total.textContent = player1Score;
    player2Total.textContent = player2Score;
  })

buttonScore.addEventListener("click" , function () {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    for (let i = 0; i < score.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = score[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    tableContainer.appendChild(table)
    tableContainer.style.width = "150px" 
    tableContainer.style.backgroundColor = "rgb(199, 199, 255)" ;
    tableContainer.style.display = "bloc"
    tableContainer.style.flexDirection = "row"
    tableContainer.style.justifyContent = "center"
    tableContainer.style.border = "solid"
    tableContainer.style.borderRadius = "10PX"
    tableContainer.style.color= "rgb(204, 0, 0)"
    tableContainer.style.overflow = "hidden"

    // modiffication du bouton click les score en ferme la liste
    buttonScore.textContent= "efface la liste"
    buttonScore.style.background = "green"
    buttonScore.style.color = "whitesmoke"
// efface le tableau
     buttonScore.addEventListener( "click" ,  function () {
        
        tableContainer.style.height = "0"
       buttonScore.textContent= "click les scores"

     })

     
    score.length = 0;
    // location = "http://127.0.0.1:5500/http://127.0.0.1:5500/"
    // location.href =location .href;
   
})

  


