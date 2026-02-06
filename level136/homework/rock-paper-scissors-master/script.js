let score = document.getElementById("score");
let FingerDIV = document.getElementById("FingerDIV2");
let finger = document.getElementsByClassName("finger");
let ChoiceDiv = document.getElementById("choiceDIV2");
let MYchoice = document.getElementById("MYchoice");
let Commuterchoice = document.getElementById("Commuterchoice");
let h1 = document.getElementById("h1");
let Finger5 = document.getElementById("Finger5");
let Finger2 = document.getElementById("Finger2");
let Finger0 = document.getElementById("Finger0");
let AGAIN = document.getElementById("AGAIN");
let restart = document.getElementById("restart");

let usrARR = ["paper.png", "sizors.png", "rock.png"];

let num = 0;

function funcrendom() {
  randomchoice = Math.floor(Math.random() * 3);
}

Finger5.addEventListener("click", function () {
  funcrendom();
  FingerDIV.style.display = "none";
  ChoiceDiv.style.display = "flex";
  Commuterchoice.src = usrARR[randomchoice];
  MYchoice.src = usrARR[0];
  if (randomchoice === 0) {
    h1.textContent = "tie";
  } else if (randomchoice === 1) {
    h1.textContent = "YOU LOSS";
  } else if (randomchoice === 2) {
    h1.textContent = "YOU WIN";
    num += 1;
    score.textContent = num;
  }
});

Finger2.addEventListener("click", function () {
  funcrendom();
  FingerDIV.style.display = "none";
  ChoiceDiv.style.display = "flex";
  Commuterchoice.src = usrARR[randomchoice];
  MYchoice.src = usrARR[1];
  if (randomchoice === 1) {
    h1.textContent = "tie";
  } else if (randomchoice === 2) {
    h1.textContent = "YOU LOSS";
  } else if (randomchoice === 0) {
    h1.textContent = "YOU WIN";
    num += 1;
    score.textContent = num;
  }
});

Finger0.addEventListener("click", function () {
  funcrendom();
  FingerDIV.style.display = "none";
  ChoiceDiv.style.display = "flex";
  Commuterchoice.src = usrARR[randomchoice];
  MYchoice.src = usrARR[2];
  if (randomchoice === 0) {
    h1.textContent = "YOU LOSS";
  } else if (randomchoice === 2) {
    h1.textContent = "tie";
  } else if (randomchoice === 1) {
    h1.textContent = "YOU WIN";
    num += 1;
    score.textContent = num;
  }
});

AGAIN.addEventListener("click", function () {
  FingerDIV.style.display = "flex";
  ChoiceDiv.style.display = "none";
});

restart.addEventListener("click", function () {
  FingerDIV.style.display = "flex";
  ChoiceDiv.style.display = "none";
  num = 0;
  score.textContent = num;
});
