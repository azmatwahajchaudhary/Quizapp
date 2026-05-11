// =============================================
//  QUIZMASTER — app.js
//  All quiz logic, state management, and
//  DOM interactions.
//  Depends on: questions.js (must load first)
// =============================================

// ---- STATE ----
// Single source of truth for the quiz session
let state = {
  questions: [],    // Shuffled subset of questions for this round
  current: 0,       // Index of the current question
  score: 0,         // Number of correct answers
  answered: false,  // Whether the current question has been answered
  timerInterval: null, // Reference to the countdown interval
  timeLeft: 30,     // Seconds remaining for the current question
  timings: [],      // Time taken (seconds) per question
  answers: [],      // Array of { selected, correct } for review
  settings: {},     // { timer } — copied from user's choices
};

// ---- UTILITY ----

/**
 * Show a screen by ID, hiding all others.
 * @param {string} id - The element ID of the screen to show
 */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/**
 * Return a new shuffled copy of an array (Fisher-Yates via sort).
 * @param {Array} arr
 * @returns {Array}
 */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * Pick `count` random questions from `pool`.
 * @param {Array} pool
 * @param {number} count
 * @returns {Array}
 */
function sampleQuestions(pool, count) {
  const shuffled = shuffle(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ---- HOME SCREEN ----

// Keep the range sliders and their labels in sync
document.getElementById('q-count').addEventListener('input', function () {
  document.getElementById('q-count-val').textContent = this.value;
  document.getElementById('q-count-label').textContent = this.value;
});

document.getElementById('q-timer').addEventListener('input', function () {
  document.getElementById('q-timer-val').textContent = this.value;
});

/**
 * Read the user's settings, build the question list, and start the quiz.
 */
function startQuiz() {
  const cat   = document.getElementById('cat-select').value;
  const diff  = document.getElementById('diff-select').value;
  const count = parseInt(document.getElementById('q-count').value);
  const timer = parseInt(document.getElementById('q-timer').value);

  // Fallback in case a category/difficulty combo has no questions
  const pool = QUESTIONS[cat]?.[diff] || QUESTIONS.general.medium;

  // Reset state for a fresh round
  state.questions = sampleQuestions(pool, count);
  state.current   = 0;
  state.score     = 0;
  state.answers   = [];
  state.timings   = [];
  state.settings  = { timer };

  document.getElementById('q-total').textContent = state.questions.length;
  showScreen('screen-quiz');
  loadQuestion();
}

// ---- QUIZ SCREEN ----

/**
 * Render the current question and its answer options, then start the timer.
 */
function loadQuestion() {
  const q = state.questions[state.current];
  state.answered = false;
  state.timeLeft = state.settings.timer;

  // Update header counters
  document.getElementById('q-num').textContent = state.current + 1;

  // Progress bar — based on questions completed so far
  const progress = (state.current / state.questions.length) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';

  // Clear previous feedback and hide the Next button
  const feedback = document.getElementById('feedback-msg');
  feedback.textContent = '';
  feedback.className = 'feedback-msg';
  document.getElementById('btn-next').className = 'btn-next';

  // Render question text
  document.getElementById('question-text').textContent = q.q;

  // Render answer options
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.opts.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${optText}</span>
    `;
    btn.onclick = () => selectAnswer(i, btn);
    container.appendChild(btn);
  });

  startTimer();
}

/**
 * Start (or restart) the countdown timer for the current question.
 */
function startTimer() {
  clearInterval(state.timerInterval);

  const pill  = document.getElementById('timer-pill');
  const label = document.getElementById('timer-val');
  const start = Date.now();

  label.textContent = state.settings.timer;
  pill.classList.remove('warning');

  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - start) / 1000);
    state.timeLeft = state.settings.timer - elapsed;
    label.textContent = Math.max(0, state.timeLeft);

    // Visual warning when 5 seconds remain
    if (state.timeLeft <= 5) {
      pill.classList.add('warning');
    } else {
      pill.classList.remove('warning');
    }

    // Time's up
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) timeOut();
    }
  }, 250); // Poll every 250ms for smooth display
}

/**
 * Handle a timeout — mark as unanswered, reveal correct option.
 */
function timeOut() {
  state.answered = true;
  const q = state.questions[state.current];

  // Record as timed-out (selected = -1)
  state.answers.push({ selected: -1, correct: q.a });
  state.timings.push(state.settings.timer);

  // Disable all options and highlight the correct one
  const options = document.querySelectorAll('.option');
  options.forEach(o => o.classList.add('disabled'));
  options[q.a].classList.add('correct');

  showFeedback("⏱ Time's up!", 'wrong');
  document.getElementById('btn-next').className = 'btn-next show';
}

/**
 * Handle the user selecting an answer option.
 * @param {number} idx  - Index of the selected option (0–3)
 * @param {Element} btn - The clicked button element
 */
function selectAnswer(idx, btn) {
  if (state.answered) return; // Ignore clicks after answer is locked in
  state.answered = true;
  clearInterval(state.timerInterval);

  const elapsed = state.settings.timer - state.timeLeft;
  state.timings.push(elapsed);

  const q = state.questions[state.current];
  const options = document.querySelectorAll('.option');

  // Lock all options
  options.forEach(o => o.classList.add('disabled'));
  state.answers.push({ selected: idx, correct: q.a });

  if (idx === q.a) {
    // Correct
    state.score++;
    btn.classList.add('correct');
    showFeedback('✓ Correct!', 'correct');
  } else {
    // Wrong — mark selected as wrong, reveal correct
    btn.classList.add('wrong');
    options[q.a].classList.add('correct');
    showFeedback('✗ Wrong!', 'wrong');
  }

  document.getElementById('btn-next').className = 'btn-next show';
}

/**
 * Display feedback text below the options.
 * @param {string} msg  - Message to display
 * @param {string} type - 'correct' or 'wrong'
 */
function showFeedback(msg, type) {
  const el = document.getElementById('feedback-msg');
  el.textContent = msg;
  el.className = `feedback-msg ${type} show`;
}

/**
 * Advance to the next question or show results if finished.
 */
function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

// ---- RESULTS SCREEN ----

/**
 * Calculate stats and render the results screen.
 */
function showResults() {
  clearInterval(state.timerInterval);

  const total   = state.questions.length;
  const pct     = Math.round((state.score / total) * 100);
  const wrong   = total - state.score;
  const avgTime = state.timings.length
    ? Math.round(state.timings.reduce((a, b) => a + b, 0) / state.timings.length)
    : 0;

  // Fill in stats
  document.getElementById('big-score').textContent   = pct + '%';
  document.getElementById('stat-correct').textContent = state.score;
  document.getElementById('stat-wrong').textContent   = wrong;
  document.getElementById('stat-time').textContent    = avgTime + 's';

  // Grade badge
  const badge = document.getElementById('grade-badge');
  if      (pct >= 90) { badge.textContent = '🏆 S Rank — Exceptional';    badge.className = 'grade-badge grade-s'; }
  else if (pct >= 75) { badge.textContent = '⭐ A Rank — Great job';       badge.className = 'grade-badge grade-a'; }
  else if (pct >= 50) { badge.textContent = '👍 B Rank — Not bad';         badge.className = 'grade-badge grade-b'; }
  else                { badge.textContent = '📚 C Rank — Keep practicing'; badge.className = 'grade-badge grade-c'; }

  // Fill the progress bar to 100%
  document.getElementById('progress-fill').style.width = '100%';

  showScreen('screen-results');
}

// ---- REVIEW SCREEN ----

/**
 * Build and show the answer review screen.
 */
function reviewAnswers() {
  const list    = document.getElementById('review-list');
  const letters = ['A', 'B', 'C', 'D'];
  list.innerHTML = '';

  state.questions.forEach((q, i) => {
    const ans  = state.answers[i];
    const item = document.createElement('div');
    item.className = 'review-item';

    let ansHtml = '';

    if (ans.selected === -1) {
      // Timed out
      ansHtml = `<div class="review-ans missed">⏱ Timed out — Correct: ${letters[ans.correct]}. ${q.opts[ans.correct]}</div>`;
    } else if (ans.selected === ans.correct) {
      // Correct
      ansHtml = `<div class="review-ans correct">✓ ${letters[ans.selected]}. ${q.opts[ans.selected]}</div>`;
    } else {
      // Wrong — show both the wrong pick and the correct answer
      ansHtml = `
        <div class="review-ans wrong">✗ You answered: ${letters[ans.selected]}. ${q.opts[ans.selected]}</div>
        <div class="review-ans missed">✓ Correct: ${letters[ans.correct]}. ${q.opts[ans.correct]}</div>
      `;
    }

    item.innerHTML = `
      <div class="review-q">${i + 1}. ${q.q}</div>
      <div class="review-answers">${ansHtml}</div>
    `;
    list.appendChild(item);
  });

  showScreen('screen-review');
}

// ---- NAVIGATION ----

/**
 * Return to the home screen and clear the timer.
 */
function goHome() {
  clearInterval(state.timerInterval);
  showScreen('screen-home');
}
