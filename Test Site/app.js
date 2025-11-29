let questionIndex = 0;
let score = 0;
let totalTime = 5 * 60; // 30 minutes in seconds

const allQuestions = [
    {
        question: "Which day comes after Friday?",
        options: ["Wednesday", "Saturday", "Sunday", "Monday"],
        correct: 1
    },
    {
        question: "How many months are there in a year?",
        options: ["10", "11", "12", "13"],
        correct: 2
    }
    ,
    {
        question: "What do we use to write on a blackboard?",
        options: ["Pen", "Chalk", "Pencil", "Marker"],
        correct: 1
    },
    {
        question: "Which shape has three sides?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        correct: 2
    },
    {
        question: "What do cows give us?",
        options: ["Milk", "Eggs", "Wool", "Meat"],
        correct: 0
    },
    {
        question: "Which number comes after 9?",
        options: ["7", "8", "10", "11"],
        correct: 2
    },
    {
        question: "What do we wear on our feet?",
        options: ["Hat", "Gloves", "Shoes", "Scarf"],
        correct: 2
    },
    {
        question: "What color is the sky on a clear day?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 1
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        correct: 1
    },
    {
        question: "Which fruit is yellow and curved?",
        options: ["Apple", "Banana", "Mango", "Pineapple"],
        correct: 1
    }
];


let answerOne = document.getElementById('answerOne');
let timerDisplay = document.getElementById('timerDisplay');
let answerTwo = document.getElementById('answerTwo');
let erorr = document.getElementById('erorr');
let answerThree = document.getElementById('answerThree');
let answerFour = document.getElementById('answerFour');
let question = document.getElementById('question');
let btnNext = document.getElementById('btnNext');

function continueQuestion(index) {
    question.innerText = allQuestions[index].question;
    answerOne.innerText = allQuestions[index].options[0];
    answerTwo.innerText = allQuestions[index].options[1];
    answerThree.innerText = allQuestions[index].options[2];
    answerFour.innerText = allQuestions[index].options[3];

    document.querySelectorAll('input[name="answer"]').forEach(radio => radio.checked = false);
}



function nextQuestion() {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        erorr.innerText = ('Enter a Option First');
        return;
    }

    // alert('You selected: ' + document.querySelector('label[for="' + selected.id + '"]').innerText);

    let selectedIndex;
    switch (selected.id) {
        case "optionOne":
            selectedIndex = 0;
            break;
        case "optionTwo":
            selectedIndex = 1;
            break;
        case "optionThree":
            selectedIndex = 2;
            break;
        case "optionFour":
            selectedIndex = 3;
            break;
    }

    if (selectedIndex === allQuestions[questionIndex].correct) {
        score++;
    }

    questionIndex++;

    if (questionIndex < allQuestions.length) {
        continueQuestion(questionIndex);
        function continueQuestion(index) {
            question.innerText = allQuestions[index].question;
            answerOne.innerText = allQuestions[index].options[0];
            answerTwo.innerText = allQuestions[index].options[1];
            answerThree.innerText = allQuestions[index].options[2];
            answerFour.innerText = allQuestions[index].options[3];

            document.querySelectorAll('input[name="answer"]').forEach(radio => radio.checked = false);

            updateProgressBar(); // Progress bar update
        }

    }
else {
    showResultPopup();
}}

function showResultPopup() {
    document.getElementById("finalScoreText").innerText = `Your Score: ${score} / ${allQuestions.length}`;
    document.getElementById("resultPopup").style.display = "flex";
}

document.getElementById("restartBtn").addEventListener("click", function() {
    score = 0;
    questionIndex = 0;
    totalTime = 30 * 60;
    document.getElementById("resultPopup").style.display = "none";
    continueQuestion(questionIndex);
    startTimer();
});


function startTimer() {
    let timer = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        totalTime--;
        if (totalTime < 0) {
            clearInterval(timer);
            alert("⏰ Time is up!");
            alert(`Final Score: ${score}`);
        }
    }, 1000);
}
function updateProgressBar() {
    let progress = ((questionIndex + 1) / allQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + "%";
}


// Event listener for next button
btnNext.addEventListener('click', nextQuestion);

// Start quiz
continueQuestion(questionIndex);
startTimer();
