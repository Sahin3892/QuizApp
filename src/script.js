let questions = [
  {
    question: "Was ist eine Schleife in der Programmierung?",
    answer_1: "Ein Fehler in einem Programm.",
    answer_2: "Ein Block von Code, der einmal ausgeführt wird.",
    answer_3: "Eine Möglichkeit, um Benutzereingaben zu verarbeiten.",
    answer_4: "Eine Datenstruktur zur Speicherung von Werten.",
    right_answer: 2,
  },
  {
    question: "Was ist der Zweck einer Funktion in der Programmierung?",
    answer_1: "Funktionen dienen dazu, Fehler im Code zu finden.",
    answer_2: "Funktionen sind Variablen, die Werte speichern.",
    answer_3: "Funktionen ermöglichen die Wiederverwendung von Code.",
    answer_4: "Funktionen steuern die Ausgabe von Daten auf dem Bildschirm.",
    right_answer: 3,
  },
  {
    question: "Was bedeutet der Begriff 'Syntaxfehler' in der Programmierung?",
    answer_1:
      "Ein Fehler, der durch falsche Anweisungen im Code verursacht wird.",
    answer_2: "Ein Fehler, der auftritt, wenn der Compiler abstürzt.",
    answer_3: "Ein Fehler, der den Programmfluss beeinflusst.",
    answer_4:
      "Ein Fehler, der durch unzureichende Speicherplatzreservierung verursacht wird.",
    right_answer: 1,
  },
  {
    question:
      "Welche der folgenden Programmiersprachen wird häufig für Webentwicklung verwendet?",
    answer_1: "Java",
    answer_2: "C++",
    answer_3: "Python",
    answer_4: "HTML",
    right_answer: 4,
  },
  {
    question: "Was ist ein Array in der Programmierung?",
    answer_1: "Eine Funktion zum Speichern von Daten in einer Datei.",
    answer_2: "Eine Methode zum Drucken von Text auf dem Bildschirm.",
    answer_3: "Eine Sammlung von Elementen, die denselben Datentyp haben.",
    answer_4:
      "Eine Möglichkeit, auf Datenbanken zuzugreifen und sie zu manipulieren.",
    right_answer: 3,
  },
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("question-length").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("end-screen").style = "";
    document.getElementById("question-body").style = `display: none`;

    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML =
      rightQuestions;
  } else {
    let question = questions[currentQuestion];

    document.getElementById("current-question").innerHTML =
      currentQuestion + 1 + " ";
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  // slice(-1) takes the last char of right_answer
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  // in this if else we can check if the selected answer is the same with the right answer
  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    // after every Correct answer the array get +1
    if (rightQuestions <= questions.length) {
      ++rightQuestions;
    }
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  // currentQuestion++ increases the question by one
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswer();
  // Loads the new question with the function
  showQuestion();
}

// Reset the Color of the Answers
function resetAnswer() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
