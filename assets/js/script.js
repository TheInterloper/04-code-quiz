
//Global variables
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#start-button")


var score = 0;
var i = 0;



//Timer

function countdown() {
  var timeLeft = 120;


  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

// countdown()

// Selectors

var answerText01 = document.createElement("button")
var answerText02 = document.createElement("button")
var answerText03 = document.createElement("button")
var answerText04 = document.createElement("button")

// main.appendChild(answerText01)



//Questions

var questions = [
  {q: "Question 1",
  answerOptions: ["A", "B", "C", "D"],
    a: "A"
  },

  {q: "Question 2",
  answerOptions: ["A", "B", "C", "D"],
    a: "B"
  },

  {q: "Question 3",
  answerOptions: ["A", "B", "C", "D"],
    a: "C"
  },

  {q: "Question 4",
  answerOptions: ["A", "B", "C", "D"],
    a: "A"
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