const quizData = [
    {
        question:"How many stripes are there on the US flag?",
        a:"10",
        b: "11",
        c:"12",
        d:"13",
        correct: "d",
    },
    {
        question:"Name the longest river in the world?",
        a:"The Nile",
        b: "Yangtze",
        c:"Mississippi River",
        d:"Amazon River",
        correct: "a",
    },
    {
        question:"What is the slang name for New York City, used by locals?",
        a:"Gotham",
        b: "Wakanda",
        c:"Asgard",
        d:"Avengers Mansion",
        correct: "a",
    },
    {
        question:"Name the best-selling book series of the 21st century?",
        a:"Lord of the Rings",
        b:"The Alchemist",
        c:"Harry Potter",
        d:"The Hobbit",
        correct: "c",
    },
    {
        question:"What is the all-time most-streamed song on Spotify to date?",
        a:"Yummy",
        b: "Blinding Lights",
        c:"Senorita",
        d:"The Shape of You",
        correct: "d",
    },
    {
        question:"How many keys does a classic piano have?",
        a:"60",
        b: "88",
        c:"79",
        d:"75",
        correct: "b",
    },
    {
        question:"When was Netflix founded?",
        a:"1997",
        b: "2001",
        c:"2009",
        d:"2015",
        correct: "a",
    },
    {
        question:"What was the most-watched series on Netflix in 2019?",
        a:"Sex Education",
        b: "Money Heist",
        c:"Stranger Things",
        d:"Sacred Games",
        correct: "c",
    },
    {
        question:"In which Netflix drama does Henry Cavill play Geralt Of Rivia, a superhero monster hunter?",
        a:"The Punisher",
        b: "The Witcher",
        c:"Daredevil",
        d:"Luke Cage",
        correct: "b",
    },
    {
        question:"Daenery's Dargons were called Dargon, Viserion and..?",
        a:"Dougal",
        b: "Vhagar",
        c:"Rhaegal",
        d:"Balerion",
        correct: "c",
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let currentQuiz = 0;
let score = 0;
var totalQuestions = document.getElementById("totalQuestion");

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

var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById("timer").innerHTML = sec + " sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
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

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You Answered correctly at ${score}/${quizData.length} questions.</h2>
            
             <button onClick="location.reload()">Reload</button>
            `;
            }
    }
});

