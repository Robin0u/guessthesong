const songs = [
    {
        title: "Shape of You",
        options: ["Ed Sheeran", "Justin Bieber", "Taylor Swift"],
        correctAnswerIndex: 0
    },
    {
        title: "Bohemian Rhapsody",
        options: ["Queen", "The Beatles", "Led Zeppelin"],
        correctAnswerIndex: 0
    },
        {
        title: "Au DD",
        options: ["Lacrim", "PLK", "PNL"],
        correctAnswerIndex: 2
    },
    {
        title: "Trop beau",
        options: ["Damso", "Lomepal", "PNL"],
        correctAnswerIndex: 1
    },
        {
        title: "Attentat",
        options: ["Dali", "Jul", "PLK"],
        correctAnswerIndex: 2
    },
    {
        title: "Foufoune Palace",
        options: ["Jul", "Luidji", "Jok'air"],
        correctAnswerIndex: 1
    },
    // Ajoutez autant de chansons que vous le souhaitez avec leurs options et les bonnes réponses
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElements = document.getElementById("options").getElementsByTagName("button");

    questionElement.textContent = songs[currentQuestion].title;

    for (let i = 0; i < 3; i++) {
        optionsElements[i].textContent = songs[currentQuestion].options[i];
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = songs[currentQuestion].correctAnswerIndex;
    const optionsElements = document.getElementById("options").getElementsByTagName("button");

    if (selectedIndex === correctIndex) {
        optionsElements[selectedIndex].style.backgroundColor = "green";
    } else {
        optionsElements[selectedIndex].style.backgroundColor = "red";
    }
}

function nextQuestion() {
    const optionsElements = document.getElementById("options").getElementsByTagName("button");

    for (let i = 0; i < 3; i++) {
        optionsElements[i].style.backgroundColor = "";
    }

    currentQuestion++;
    if (currentQuestion >= songs.length) {
        currentQuestion = 0; // Loop back to the first question if reached end
    }

    displayQuestion();
}

// Afficher la première question au chargement de la page
displayQuestion();

function checkAnswer(selectedIndex) {
    const correctIndex = songs[currentQuestion].correctAnswerIndex;
    const optionsElements = document.getElementById("options").getElementsByTagName("button");

    if (selectedIndex === correctIndex) {
        optionsElements[selectedIndex].style.backgroundColor = "green";
    } else {
        optionsElements[selectedIndex].style.backgroundColor = "red";
    }
}
