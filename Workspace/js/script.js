var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
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
    q: 'Who won the constructors championship in 2021?',
    a: 'Mercedes',
    choices: [{ choice: 'Redbull' }, { choice: 'Mercedes' }, { choice: 'Ferrari' }, { choice: 'Mclaren' }]
  },
  {
    q: 'how fast does an f1 car go?',
    a: '200+ MPH',
    choices: [{ choice: '80 MPH' }, { choice: '150 MPH' }, { choice: '200+ MPH' }, { choice: '120 MPH' }]
  },
  {
    q: 'What color is the Ferrari car??',
    a: 'Red',
    choices: [{ choice: 'Black' }, { choice: 'Yellow' }, { choice: 'Red' }, { choice: 'Silver' }]
  },
  {
    q: 'Who does Lewis Hamilton drive for?',
    a: 'Mercedes',
    choices: [{ choice: 'Mercedes' }, { choice: 'Mclaren' }, { choice: 'Redbull' }, { choice: 'Ferrari' }]
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

var setTime = function () {
  timeleft = 50;

  var timercheck = setInterval(function () {
    timerEl.innerText = timeleft;
    timeleft--

    if (gameover) {
      clearInterval(timercheck)
    }

    if (timeleft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timercheck)
    }

  }, 1000)
}

var startGame = function () {
  containerStartEl.classList.add('hide');
  containerStartEl.classList.remove('show');
  containerQuestionEl.classList.remove('hide');
  containerQuestionEl.classList.add('show');
  arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
  setTime()
  setQuestion()
}

var setQuestion = function () {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

var resetAnswers = function () {
  while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

var displayQuestion = function (index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement('button')
    answerbutton.innerText = index.choices[i].choice
    answerbutton.classList.add('btn')
    answerbutton.classList.add('answerbtn')
    answerbutton.addEventListener("click", answerCheck)
    answerbuttonsEl.appendChild(answerbutton)
  }
};

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
    wrongEl.classList.add("banner")
    correctEl.classList.remove("banner")
    correctEl.classList.add("hide")
  }
}

var answerCheck = function (event) {
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

  QuestionIndex++
  if (arrayShuffledQuestions.length > QuestionIndex + 1) {
    setQuestion()
  }
  else {
    gameover = "true";
    showScore();
  }
}

var showScore = function () {
  containerQuestionEl.classList.add("hide");
  containerEndEl.classList.remove("hide");
  containerEndEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = ("Your final score is " + score + "!");
  containerScoreEl.appendChild(scoreDisplay);
}

var createHighScore = function (event) {
  event.preventDefault()
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your intials!");
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