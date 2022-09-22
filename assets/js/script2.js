//Global element variables 
var timeElement = document.querySelector("#timer")
var startButton = document.querySelector("#start-button")
var main = document.querySelector("main")
var pTag = document.createElement("p")

// Global variables to track time, score, and question number
var timeLeft = 120
var score = 0;
var index = 0; // this global variable will increment for every question, to loop through the questions when answers are chosen

// Prepare the timer interval and correct answer for current question
var timerInterval
var currentCorrect

//Array of questions
var questions = [             
  {
    q: "Question 1",
    answerOptions: ["A", "B", "C", "D"],
    a: "A"
  },

  {
    q: "Question 2",
    answerOptions: ["A", "B", "C", "D"],
    a: "C"
  },

  {
    q: "Question 3",
    answerOptions: ["A", "B", "C", "D"],
    a: "A"
  },

  {
    q: "Question 4",
    answerOptions: ["A", "B", "C", "D"],
    a: "B"
  },

  {
    q: "Question 5",
    answerOptions: ["A", "B", "C", "D"],
    a: "D"
  }
]

// Timer handler
function countdown() {
    // Update the timerInterval variable to be an interval
    timerInterval = setInterval(function() {
        // Decrement the time left by 1
        timeLeft--;
        // Update the html to reflect the current time left
        timeElement.textContent = timeLeft;
        // If the time hits or goes below 0
        if(timeLeft <= 0) {
            // Stop running the timer
            clearInterval(timerInterval);
            // Display game over
            // CALL GAME OVER FUNCTION HERE
        }
    }, 1000) // Run this every second
}

// Function to display a new question
function questionSet() {        
    // The current question is selected from the quetsions array at the current index, determined by our global variable index
    var currentQuestion = questions[index] 
    // Set the current correct answer
    currentCorrect = currentCorrect.a
    // Give the pa tag text containing the current question
    pTag.textContent = currentQuestion.q
    // Put that question element on the html by appending it to the main tag
    main.appendChild(pTag)
    // For every possible answer in the quetsion set
    for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
        // Create a button element to represent an answer
        var answerText = document.createElement("button")
        // Set the button's text to be the current answer in the array 
        answerText.textContent = currentQuestion.answerOptions[i]
        // Set the button's class to be 'question-btn'
        answerText.className = "question-btn"
        // Append the button to the main element
        main.appendChild(answerText)  
    }
}


function correctAnswer(e) {
  if(e.target.textContent === currentCorrect){
    score++
  // if e matches correct answer then increase correct
  // currentQuestion.a
  //else decrease time 10s and increment incorrect
  }
}



// Event listener to start game when start button is clicked 
startButton.addEventListener("click", function() {
    // Start timer
    countdown()
    // Display first question
    questionSet()
})

// event listener for correct button press
main.addEventListener("click", function(e) {
    // If the user clicked a button
    if (e.target.matches(".question-btn")) {
        // Reset the main element
        main.innerHTML = ""
        // Check the correct answer based on what button the user clicked
        correctAnswer(e)
        // Increment the question number counter
        index++
        // Run the function that displays a new question
        questionSet()
    }
})