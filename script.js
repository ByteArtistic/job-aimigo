// quiz.js
const questions = [
    { q: "What does AI stand for?", a: "Artificial Intelligence" },
    { q: "Which language is commonly used for AI?", a: "Python" },
    { q: "Which company developed ChatGPT?", a: "OpenAI" },
    { q: "What is Machine Learning?", a: "Training computers to learn from data" },
    { q: "Name a popular AI image tool.", a: "DALL·E" },
    { q: "What is Natural Language Processing used for?", a: "Understanding human language" },
    { q: "AI used in self-driving cars is called?", a: "Computer Vision" },
    { q: "What is bias in AI?", a: "Unfair preference in model output" },
    { q: "What does GPT in ChatGPT stand for?", a: "Generative Pre-trained Transformer" },
    { q: "What is an AI chatbot?", a: "A conversational computer program" }
  ];

  let current = 0;
  const questionBox = document.getElementById("question-box");
  const progressBar = document.getElementById("progressBar");

  function showQuestion() {
    if (current >= questions.length) {
      questionBox.innerHTML = `<h3>Quiz Complete! 🎉</h3>`;
      progressBar.style.width = "100%";
      return;
    }

    const q = questions[current];
    questionBox.innerHTML = `
      <p><strong>Q${current + 1}:</strong> ${q.q}</p>
      <input type="text" id="answer" placeholder="Your answer here" />
      <br><button onclick="checkAnswer()">Submit</button>
    `;
  }

  function checkAnswer() {
    const input = document.getElementById("answer").value.trim().toLowerCase();
    const correct = questions[current].a.toLowerCase();
    current++;
    progressBar.style.width = `${(current / questions.length) * 100}%`;
    showQuestion();
  }

  showQuestion();
