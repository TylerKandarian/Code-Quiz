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


// The array of questions for our quiz game.
var questions = [
    { q: 'Who has the most championships in F1 history?', 
      a: 'Both b and c', 
      choices: ["Nikita Mazepin", "Lewis Hamilton", "Michael Schumacher", "Both b and c"]
    },
    { q: 'Who has the most championships in F1 history?', 
      a: 'Both b and c', 
      choices: ["Nikita Mazepin", "Lewis Hamilton", "Michael Schumacher", "Both b and c"]
    },
    { q: 'Who has the most championships in F1 history?', 
      a: 'Both b and c', 
      choices: ["Nikita Mazepin", "Lewis Hamilton", "Michael Schumacher", "Both b and c"]
    },
    { q: 'Who has the most championships in F1 history?', 
      a: 'Both b and c', 
      choices: ["Nikita Mazepin", "Lewis Hamilton", "Michael Schumacher", "Both b and c"]
    },
    { q: 'Who has the most championships in F1 history?', 
      a: 'Both b and c', 
      choices: ["Nikita Mazepin", "Lewis Hamilton", "Michael Schumacher", "Both b and c"]
    },
  ];

  // start the game with a score of 0
  var score = 0;

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user
    var answer = prompt(questions[i].q);
    console.log(answer)
    console.log(questions[i].a)

    if (questions[i].a === answer) {
      // Increase score
      score++;
      }
    else {
      score--;
    }
  };

  // total
  alert('You got ' + score + '/' + questions.length);