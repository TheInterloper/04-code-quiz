
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")
var timesUp = document.querySelector("#timesup")
var header = document.querySelector("header")


var main = document.querySelector("main")
var pTag = document.createElement("p")


var scores = JSON.parse(localStorage.getItem("highscores")) || []
  // array with objects(initials and score)
  //or
  // empty array

var timerInterval


var timeLeft = 30;
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

    timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = "Time Remaining " + timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      main.innerHTML = "Times up!"
      resetButton()
    }

  }, 1000);
}

// Button to refresh page
function resetButton(){
  var reset = document.createElement("button")
  reset.textContent = "Play Again"
  reset.className = "button"
  reset.addEventListener("click", function(){
    location.reload();
  })
  main.appendChild(reset)
}

//Loop for questions -- It is working, and there was MORE rejoicing!
function questionSet() {    
  var currentQuestion = questions[index];
  
  if(currentQuestion){
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
  } else {
    clearInterval(timerInterval)
    highScore()
    showScore() 
    resetButton()
  }
  
};


function correctAnswer(e, answer) {
  if(e.target.textContent === answer){
    // if e matches correct answer then increase correct
    score++;
    correct.textContent = "# Correct: " + score;
  //else decrease time 10s and increment incorrect
  } else{
    timeLeft -= 10;
    score2++;
    incorrect.textContent = "# Incorrect: " + score2;
  }

};

function highScore(){
  var submit = document.querySelector("#submit-initials")
  var initials = document.querySelector("#initials");
  
  submit.addEventListener('click', function() {
    // console.log(initials.value)
    scores.push( {initials:initials.value, score:score} ) 
    localStorage.setItem("highscores", JSON.stringify(scores))
    showScore()
    submit.style.display = "none"
  })

};

function showScore(){
  var scoreList = document.querySelector("#score-list")
  removeChildren(scoreList)
  for(var i = 0; i < scores.length; i++){
    //create li tag
    var scoreEl = document.createElement("li")
    // apply text to the li tag
    scoreEl.textContent= String(`${scores[i].initials}:${scores[i].score}`)
    //inserting li tag to the ul tag
    scoreList.appendChild(scoreEl)
  }
};

function removeChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  } 
};



// Start Event listener button

startButton.addEventListener("click", function() {
  main.innerHTML = ""
  countdown()
  questionSet()
})