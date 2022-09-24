const quizData = [
    {
        question: "what is the full form of WTO?",
        a: "World Trade Organization",
        b: "West to East",
        c: "World Test Organization",
        d: "Word Trade Organization",
        correct: "a",
    },
    {
        question: "Where is 'Gateway of India' situated?",
        a: "Delhi",
        b: "Jaipur",
        c: "Mumbai",
        d: "Mihai Andrei",
        correct: "c",
    },
    {
        question: "Which is the highest civillian award in India?",
        a: "IIFA Award",
        b: "Bharat Ratna",
        c: "Oscar",
        d: "Khel Ratna",
        correct: "b",
    },
    {
        question: "Who in India is the supreme commander of armed forces?",
        a: "MLA",
        b: "CM",
        c: "PM",
        d: "President",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }    
});
