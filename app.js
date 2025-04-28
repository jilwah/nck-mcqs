const questions = [
  {
    question: "Which hormone regulates calcium levels and may contribute to imbalances in CKD?",
    options: ["Insulin", "Parathyroid hormone", "Aldosterone", "Thyroid-stimulating hormone"],
    answer: 1,
    rationale: "Parathyroid hormone regulates calcium by increasing intestinal absorption and kidney reabsorption."
  },
  {
    question: "Which part of the brain is likely affected in loss of coordination and balance after TBI?",
    options: ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Frontal lobe"],
    answer: 0,
    rationale: "The cerebellum is crucial for voluntary movement coordination and balance."
  },
  {
    question: "Which part of the brain regulates body temperature?",
    options: ["Medulla oblongata", "Hypothalamus", "Amygdala", "Pons"],
    answer: 1,
    rationale: "The hypothalamus adjusts body temperature by responding to core changes."
  },
  {
    question: "Difficulty speaking and swallowing after a stroke suggests damage to?",
    options: ["Broca's area", "Wernicke's area", "Occipital lobe", "Parietal lobe"],
    answer: 0,
    rationale: "Broca's area controls speech production; damage causes expressive aphasia."
  },
  {
    question: "Which system controls the 'fight or flight' response during a sprint?",
    options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Central nervous system", "Autonomic nervous system"],
    answer: 0,
    rationale: "The sympathetic system elevates heart rate and respiratory rate in emergencies."
  }
];

let currentIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function renderCard() {
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  const front = document.getElementById('front');
  const back = document.getElementById('back');
  const q = questions[currentIndex];

  front.innerHTML = `<h3>${q.question}</h3>` + q.options.map((opt, idx) =>
    `<div class='options'><button onclick='selectOption(${idx})'>${opt}</button></div>`
  ).join('');

  back.innerHTML = `<h3>Answer: ${q.options[q.answer]}</h3><p>${q.rationale}</p>`;

  updateProgress();
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % questions.length;
  renderCard();
}

function previousCard() {
  currentIndex = (currentIndex - 1 + questions.length) % questions.length;
  renderCard();
}

function selectOption(selected) {
  if (selected === questions[currentIndex].answer) {
    alert("Correct!");
    correctAnswers++;
  } else {
    alert("Incorrect. Correct answer: " + questions[currentIndex].options[questions[currentIndex].answer]);
    wrongAnswers++;
  }
  flipCard();
  updateProgress();
}

function updateProgress() {
  const total = correctAnswers + wrongAnswers;
  const percent = total > 0 ? (correctAnswers / total) * 100 : 0;
  document.getElementById('progress-bar').style.width = percent + '%';
}

renderCard();
