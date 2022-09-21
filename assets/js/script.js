
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#startbutton")

var body = document.body

var score = 0;
var i = 0;



//Timer   WORKING, Hooray!

function countdown() {
  var timeLeft = 120;

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      // display game over
    }

  }, 1000);
}


//Answer Selectors

var answerText01 = document.createElement("button")
var answerText02 = document.createElement("button")
var answerText03 = document.createElement("button")
var answerText04 = document.createElement("button")


//attempting to have possible answers displayed in the buttons.  ! not working !
// answerText01.textContent = (questions[0].answerOptions[0])
answerText02.textContent = "Working"
answerText03.textContent = "Working"
answerText04.textContent = "Working"

body.appendChild(answerText01)
body.appendChild(answerText02)
body.appendChild(answerText03)
body.appendChild(answerText04)

//Questions

//Loop for questions -- ! not working yet !
function questionSet() {      
  for (var i = 0; i < questions.length; i++) {
  questions[i]++
  }
}



var questions = [       //Array of questions
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


console.log(questions[0].q) //targeting question 1
console.log(questions[1].q) //targeting question 2

console.log(questions[0].a) // targets correct answer 
console.log(questions[1].a) // targets correct answer



// Event listener button

startButton.addEventListener("click", function() {
  countdown()
})