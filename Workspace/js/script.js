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