
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")
var timesUp = document.querySelector("#timesup")
var header = document.querySelector("header")


var main = document.querySelector("main")
var pTag = document.createElement("p")

// var initials = localStorage.setItem()
// var highScore = localStorage.setItem()

// var scores = []

var timeLeft = 90;
var score = 0;
var score2 = 0;
var index = 0;



//Array of questions
var questions = [             
  {q: "What year was JavaScript invented?",
  answerOptions: ["1995", "1999", "1990", "2000"],
    a: "1995"
  },

  {q: "Which pair of characters is used to designate an array?",
  answerOptions: ["( )", "{ }", "[ ]", "< >"],
    a: "[ ]"
  },

  {q: "How many primitive data types are there in JavaScript?",
  answerOptions: ["5", "7", "10", "11"],
    a: "5"
  },

  {q: "The data type for TRUE and FALSE is known as ______ ?",
  answerOptions: ["Operators", "Booleans", "Strings", "Undefined"],
    a: "Booleans"
  },

  {q: "Coding this assignment has caused me ______ ?",
  answerOptions: ["Headaches", "Frustration", "Sadness", "All of the Above!"],
    a: "All of the Above!"
  }
]




//Timer -- It is working, and there was much rejoicing!

function countdown() {

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = "Time Remaining " + timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}







// function gameOver() {
//   prompt("Enter your Initials")
//   prompt("Enter your score")

// }





//Questions

//Loop for questions -- It is working, and there was much rejoicing!
function questionSet() {    
  var currentQuestion = questions[index];
  pTag.textContent = currentQuestion.q;
  main.appendChild(pTag);

  
  
  for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
    var answerText = document.createElement("button")
    answerText.textContent = currentQuestion.answerOptions[i]
    answerText.className = "button"
    answerText.addEventListener("click", function(e){
      main.innerHTML = "";
      correctAnswer(e, currentQuestion.a);
      index++;
      questionSet();

    })
    main.appendChild(answerText)
  }
};


function correctAnswer(e, answer) {
  if(e.target.textContent === answer){
    // if e matches correct answer then increase correct
    score++;
    correct.textContent = "# Correct: " + score;
  // currentQuestion.a
  //else decrease time 10s and increment incorrect
  } else{
    timeLeft -= 10;
    score2++;
    incorrect.textContent = "# Incorrect: " + score2;
  }



};




// Start Event listener button

startButton.addEventListener("click", function() {
  main.innerHTML = ""
  countdown()
  questionSet()
})