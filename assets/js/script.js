
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")

var main = document.querySelector("main")
var pTag = document.createElement("p")



var body = document.body
var timeLeft = 120
var score = 0;
// var i = 0;
var index = 0;


//Array of questions
var questions = [             
  {q: "Question 1",
  answerOptions: ["A", "B", "C", "D"],
    a: "A"
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










// var gameOver() {
//   if timer reaches 0, alert 'game over'

// }


//Timer   WORKING, Hooray!

function countdown() {

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      // display game over
    }

  }, 1000);
}






//Questions

//Loop for questions -- ! not working yet !
function questionSet() {    
  var currentQuestion = questions[index] 
  console.log(currentQuestion)
  pTag.textContent = currentQuestion.q
  main.appendChild(pTag)
  
  for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
    var answerText = document.createElement("button") 
    answerText.textContent = currentQuestion.answerOptions[i]
    answerText.className = "button"
    main.appendChild(answerText)  

  }

  // event listener for correct button press
  main.addEventListener("click", function(e) {

    if(e.target.matches(".button")){
    main.innerHTML = ""
    correctAnswer(e, currentQuestion.a)
    index++
    questionSet()
    }

})
}


function correctAnswer(e, answer) {
  if(e.target.textContent === answer){
    score++
  // if e matches correct answer then increase correct
  // currentQuestion.a
  //else decrease time 10s and increment incorrect
  }
}


//console.log(questions[0].q) //targeting question 1
//console.log(questions[1].q) //targeting question 2

//console.log(questions[0].a) // targets correct answer 
console.log(questions[1].a) // targets correct answer



// Event listener button

startButton.addEventListener("click", function() {
  countdown()
  questionSet()
})