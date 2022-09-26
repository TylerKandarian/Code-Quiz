var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;

var HighScores = [];

var arrayShuffledQuestions
var QuestionIndex = 0

// The array of questions for our quiz game.
var questions = [
  {
    q: 'Who has the most championships in F1 history?',
    a: 'Both b and c',
    choices: [{ choice: 'Nikita Mazepin' }, { choice: 'Lewis Hamilton' }, { choice: 'Michael Schumacher' }, { choice: 'Both b and c' }]
  },
  {
    q: 'Who has the most championships in F1 history?',
    a: 'Both b and c',
    choices: [{ choice: 'Nikita Mazepin' }, { choice: 'Lewis Hamilton' }, { choice: 'Michael Schumacher' }, { choice: 'Both b and c' }]
  },
  {
    q: 'Who has the most championships in F1 history?',
    a: 'Both b and c',
    choices: [{ choice: 'Nikita Mazepin' }, { choice: 'Lewis Hamilton' }, { choice: 'Michael Schumacher' }, { choice: 'Both b and c' }]
  },
  {
    q: 'Who has the most championships in F1 history?',
    a: 'Both b and c',
    choices: [{ choice: 'Nikita Mazepin' }, { choice: 'Lewis Hamilton' }, { choice: 'Michael Schumacher' }, { choice: 'Both b and c' }]
  },
  {
    q: 'Who has the most championships in F1 history?',
    a: 'Both b and c',
    choices: [{ choice: 'Nikita Mazepin' }, { choice: 'Lewis Hamilton' }, { choice: 'Michael Schumacher' }, { choice: 'Both b and c' }]
  },
];

var renderStartPage = function () {
  containerHighScoresEl.classList.add("hide")
  containerHighScoresEl.classList.remove("show")
  containerStartEl.classList.remove("hide")
  containerStartEl.classList.add("show")
  containerScoreEl.removeChild(containerScoreEl.lastChild)
  QuestionIndex = 0
  gameover = ""
  timerEl.textContent = 0
  score = 0

  if (correctEl.className = "show") {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
}

var answerCorrect = function () {
  if (correctEl.className = "hide") {
    correctEl.classList.remove("hide")
    correctEl.classList.add("banner")
    wrongEl.classList.remove("banner")
    wrongEl.classList.add("hide")
  }
}
var answerWrong = function () {
  if (wrongEl.className = "hide") {
    wrongEl.classList.remove("hide")
    var selectedanswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
      answerCorrect()
      score = score + 20
    }

    else {
      answerWrong()
      score = score - 20;
      timeleft = timeleft - 5;
    };

    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
  }

  var createHighScore = function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    return;
  }

  formInitials.reset();

  var HighScore = {
    initials: initials,
    score: score
  }

  HighScores.push(HighScore);
  HighScores.sort((a, b) => { return b.score - a.score });

  while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild)
  }

  for (var i = 0; i < HighScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);
  }

  saveHighScore();
  displayHighScores();

}

var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))

}

var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
  if (!LoadedHighScores) {
    return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => { return b.score - a.score })


  for (var i = 0; i < LoadedHighScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);

    HighScores.push(LoadedHighScores[i]);

  }
}

var displayHighScores = function () {

  containerHighScoresEl.classList.remove("hide");
  containerHighScoresEl.classList.add("show");
  gameover = "true"

  if (containerEndEl.className = "show") {
    containerEndEl.classList.remove("show");
    containerEndEl.classList.add("hide");
  }
  if (containerStartEl.className = "show") {
    containerStartEl.classList.remove("show");
    containerStartEl.classList.add("hide");
  }

  if (containerQuestionEl.className = "show") {
    containerQuestionEl.classList.remove("show");
    containerQuestionEl.classList.add("hide");
  }

  if (correctEl.className = "show") {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
  }

  if (wrongEl.className = "show") {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }

}

var clearScores = function () {
  HighScores = [];

  while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }

  localStorage.clear(HighScores);

}

loadHighScore()

btnStartEl.addEventListener("click", startGame)

formInitials.addEventListener("submit", createHighScore)

ViewHighScoreEl.addEventListener("click", displayHighScores)

btnGoBackEl.addEventListener("click", renderStartPage)

btnClearScoresEl.addEventListener("click", clearScores)