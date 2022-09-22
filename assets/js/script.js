
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")
var timesUp = document.querySelector("#timesup")
var header = document.querySelector("header")


var main = document.querySelector("main")
var pTag = document.createElement("p")



var timeLeft = 3
var score = 0;
var score2 =0;
// var i = 0;
var index = 0;


//Array of questions
var questions = [             
  {q: "What year was JavaScript invented?",
  answerOptions: ["1995", "1999", "1990", "2000"],
    a: "1995"
  },

  {q: "Question 2",
  answerOptions: ["A", "B", "C", "D"],
    a: "C"
  },

  {q: "Question 3",
  answerOptions: ["A", "B", "C", "D"],
    a: "A"
  },

  {q: "Question 4",
  answerOptions: ["A", "B", "C", "D"],
    a: "B"
  },

  {q: "Question 5",
  answerOptions: ["A", "B", "C", "D"],
    a: "D"
  }
]




//Timer   It is working, and there was much rejoicing!

function countdown() {

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = "Time Remaining " + timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      gameOver()
    }

  }, 1000);
}

// function enterScore (){
//   initials = prompt("Enter Initials")
// }


function gameOver() {
  timesUp.textContent = "Times up!"
  header.appendChild(timesUp);
  main.innerHTML= "";
  // enterScore()

  }







//Questions

//Loop for questions -- ! not working yet !
function questionSet() {    
  var currentQuestion = questions[index];
  console.log(currentQuestion);
  pTag.textContent = currentQuestion.q;
  main.appendChild(pTag);
  
  for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
    var answerText = document.createElement("button")
    answerText.textContent = currentQuestion.answerOptions[i]
    answerText.className = "button"
    main.appendChild(answerText)
    }

  // event listener for correct button press
  main.addEventListener("click", function(e) {

    if(e.target.matches(".button")){
    main.innerHTML = "";
    correctAnswer(e, currentQuestion.a);
    index++;
    questionSet();
    }
    

})
};


function correctAnswer(e, answer) {
  if(e.target.textContent === answer){
    // if e matches correct answer then increase correct
    score++
    correct.textContent = "# Correct: " + score;
  // currentQuestion.a
  //else decrease time 10s and increment incorrect
  } else
    timeLeft -= 10;
    score2++
    incorrect.textContent = "# Incorrect " + score2
}




// Start Event listener button

startButton.addEventListener("click", function() {
  main.innerHTML = ""
  countdown()
  questionSet()
})