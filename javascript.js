// Initialiser les variables de score et de toure
var rollinstantané
var player1TotalScore = 0; // score total sur plusieurs rounds
var player2TotalScore = 0; // score total sur plusieurs rounds
var player1Scoreround = 0; // score par round
var player2Scoreround = 0; // score par round
var currentPlayer = 1;
let joueurActif1;
let joueurActif2;
var roll = 0;
// var scorecourant1 = 0;
// var scorecourant2 = 0;
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

let joueurSelection1;
let joueurSelection2;

// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------
var newGame = document.getElementById("new-game-button");
var tirageJoueur = document.getElementById("validerJoueurActif2")

newGame.addEventListener("click", function () {
  if (dé.style.visibility === "visible") {
    dé.style.visibility = "hidden";
  } 
  
  location = "http://127.0.0.1:5503/";
  location.href = location.href;
  var joueurSelection1;
  var joueurSelection2;
  console.log("Le joueur tiré au sort est : " + joueurGagnant);
  alert("Le joueur tiré au sort est : " + joueurGagnant);
  alert(joueurSelection1);
  alert(joueurSelection2);
// ------------------------------------------------------------------------


  // joueurSelection1 = prompt("Entrez le nom du premier joueur :");
  // joueurSelection2 = prompt("Entrez le nom du deuxième joueur :");

  // let joueurGagnant = Math.random() < 0.5 ? joueurSelection1 : joueurSelection2;
  // let joueurPerdant = joueurGagnant === joueurSelection1 ? joueurSelection2 : joueurSelection1;
  // document.getElementById("namePlayer1").value = joueurGagnant;
  // document.getElementById("namePlayer2").value = joueurPerdant;

  // console.log("Le joueur tiré au sort est : " + joueurGagnant);
  // alert("Le joueur tiré au sort est : " + joueurGagnant);
  // alert(joueurSelection1);
  // alert(joueurSelection2);

  // if (joueurActif1===1) {
  //   joueurActif1 = true;
  // } else
  // joueurActif1 = false
});
// --------------------NOUVEAU JEUX REINITIALISATION DU JEU--------------------------



// --------------------SAISI DES JOUEURS----------------------------------------------

document
  .getElementById("validerJoueurActif1")
  .addEventListener("click", function () {
    joueurActif1 = document.getElementById("joueur1").value;
    document.querySelector("#namePlayer1").textContent = joueurActif1;
    var nom1 = document.getElementById("nom1");
    nom1.textContent = joueurActif1;
  });

document
  .getElementById("validerJoueurActif2")
  .addEventListener("click", function () {
    joueurActif2 = document.getElementById("joueur2").value;
    document.querySelector("#namePlayer2").textContent = joueurActif2;
    var nom2 = document.getElementById("nom2");
    nom2.textContent = joueurActif2;
    // playButton.style.visibility = "visible"
  });
// --------------------LANCE LA PARTIE DE Dé----------------------------------------------

function déLancé(roll) {
  var roll = Math.floor(Math.random() * 6) + 1;
   dé.style.visibility = "visible";
   if (dé.style.visibility === "hidden") {
    dé.style.visibility = "visible";
  } 
  // else {
  //   dé.style.visibility = "hidden";
  // }
  //lance le dé et fait tourner l'image--------
  let angle = 0;
  const button = document.getElementById("roll-dice");
  const image = document.querySelector("#dé");
  //fais tourner la photo
  angle += 180;
  image.style.transform = "rotate(100deg)";

  return roll;

};

var conditionJoueur = function (player1Scoreround ) {
  
  if ((joueurActif1 = true)) {
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
      // var roll = Math.floor(Math.random() * 6) + 1;
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
    // Sinon ajouter le score à la variable score totale
    else {
      player1Scoreround = player1Scoreround + roll;
    // jortie jet de dé instantanée
    rollinstantané = joueurActif2 + " a sorti: " + roll;
    document.querySelector("#message").textContent = rollinstantané;
    //   sommes score courant
    champPlayer1Scoreround.textContent = player2Scoreround;
    tableScoreCourant2.push(roll);
    console.table(tableScoreCourant2);
    tableScoreCourant1.push(roll);
    };
  }
return player1Scoreround 
}

playButton.addEventListener("click", function rollDice(roll) {
  // Générer un nombre aléatoire entre 1 et 6 pour le joueur actuel
  var roll = déLancé();
  conditionJoueur ();
  return roll
});

hold.addEventListener("click", function () {

  if (currentPlayer === 1) {
    player1TotalScore += player1Scoreround;
    champPlayer1TotalScore.textContent = player1TotalScore;
    player1Scoreround = 0;
    player2Scoreround = 0;
    champPlayer2Scoreround.textContent = player2TotalScore;
    currentPlayer = 2;
    infoMessage.textContent = "C'est au tour de " + joueurActif2;
    déLancé();
    } else {
    player2TotalScore += player2Scoreround;
    champPlayer2TotalScore.textContent = player2TotalScore;
    player1Scoreround = 0;
    player2Scoreround = 0;
    champPlayer1Scoreround.textContent = player1TotalScore;
    currentPlayer = 1;
    infoMessage.textContent = "C'est au tour de " + joueurActif1;
      déLancé();
      
  // if (currentPlayer === 1) {
  //   currentPlayer = currentPlayer === 1 ? 2 : 1;
  //   player1TotalScore = player1Scoreround + player1TotalScore;
  //   champPlayer1TotalScore.textContent = player1TotalScore;
  //   document.querySelector("#player1-round-score").textContent = " ";
  //   player1Scoreround = 0;
  // } else {
  //   player2TotalScore = player2Scoreround + player2TotalScore;
  //   champPlayer2TotalScore.textContent = player2TotalScore;
  //   document.querySelector("#player2-round-score").textContent = " ";
  //   champPlayer2TotalScore.textContent = player2TotalScore;
  //   // player2Scoreround = 0;
  }

  // -----------injection style et élémént dans le DOM box liste des scores----------------------------------
  boxScores.style.visibility = "visible";
  boxScores.style.zIndex = "1500";
  tablePartie1.push(player1Scoreround);
  tablePartie2.push(player2Scoreround);
  // console.log(tablePartie1);
  // console.log(tablePartie2);
  // player1Total.textContent = player1Scoreround;
  // player2Total.textContent = player2Scoreround;
});

buttonScore.textContent = "efface la liste";
buttonScore.addEventListener("click", function () {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 0; i < tableScoreCourant1.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = tableScoreCourant1[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  // slylisation du tableau
  table.appendChild(tbody);
  table2Container.appendChild(table);
  table2Container.style.width = "150px";
  table2Container.style.backgroundColor = "rgb(199, 199, 255)";
  table2Container.style.display = "bloc";
  table2Container.style.flexDirection = "row";
  table2Container.style.justifyContent = "center";
  table2Container.style.border = "solid";
  table2Container.style.borderRadius = "10PX";
  table2Container.style.color = "rgb(204, 0, 0)";
  table2Container.style.overflow = "hidden";

  // modiffication du bouton click les score et ferme la liste
  buttonScore.style.background = "green";
  buttonScore.style.color = "whitesmoke";
  // efface le tableau
  buttonScore.addEventListener("click", function () {
    buttonScore.textContent = "efface la liste";
    tableScoreCourant1.length = 0;
    tableContainer.style.height = "0px";
  });
  // location = "http://127.0.0.1:5500/http://127.0.0.1:5500/"
  // location.href =location .href;
});
buttonScore.addEventListener("click", function () {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 0; i < tableScoreCourant1.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = tableScoreCourant1[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  // slylisation du tableau
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  tableContainer.style.width = "150px";
  tableContainer.style.backgroundColor = "rgb(199, 199, 255)";
  tableContainer.style.display = "bloc";
  tableContainer.style.flexDirection = "row";
  tableContainer.style.justifyContent = "center";
  tableContainer.style.border = "solid";
  tableContainer.style.borderRadius = "10PX";
  tableContainer.style.color = "rgb(204, 0, 0)";
  tableContainer.style.overflow = "hidden";
  // modiffication du bouton click les score en ferme la liste
  buttonScore2.textContent = "efface la liste";
  buttonScore2.style.background = "green";
  buttonScore2.style.color = "whitesmoke";
  // efface le tableau
  buttonScore2.addEventListener("click", function () {
    buttonScore2.textContent = "efface les scores";
    tableScoreCourant2.length = 0;
    table2Container.style.height = "0px";
  });

  // location = "http://127.0.0.1:5500/http://127.0.0.1:5500/"
  // location.href =location .href;
});


// image.onclick = function() {
//   this.style.transform = "rotate(180deg)";
// };

// newGame.addEventListener("click",  function() {
//   location = "http://127.0.0.1:5503/";
//   location.href = location.href;
// });
