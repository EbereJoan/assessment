const quiz = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin"],
      correct: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter"],
      correct: 0
    },
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById("quiz");
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = quiz[currentQuestion];
    const choices = question.choices.map((choice, index) => `<input type="radio" name="answer" value="${index}">${choice}<br>`).join("");
    quizContainer.innerHTML = `
      <h2>${question.question}</h2>
      <form id="answerForm">${choices}<button type="button" onclick="checkAnswer()">Submit</button></form>
    `;
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      const userAnswer = parseInt(selectedAnswer.value);
      if (userAnswer === quiz[currentQuestion].correct) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        displayQuestion();
      } else {
        quizContainer.innerHTML = `<p>Your score: ${score} out of ${quiz.length}</p>`;
      }
    }
  }
  
  displayQuestion();
  