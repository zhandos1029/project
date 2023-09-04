// Scrollbar to top

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conis-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Questions

const questions = [
  {
    question: "Какие из следующих аспектов вам больше всего интересны?",
    answers: [
      {
        text: "Работа с дизайном пользовательского интерфейса и создание визуально привлекательных веб-страниц.",
        correct: 1,
      },
      {
        text: "Работа с базами данных, серверами и логикой веб-приложений.",
        correct: 2,
      },
      {
        text: "Анализ и планирование маркетинговых стратегий, продвижение продуктов и коммуникация с клиентами. ",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Что вам нравилось делать в детстве? Расскажите о своих любимых занятиях и почему они вам нравились.",
    answers: [
      { text: "Конструирование или рисование. ", correct: 1 },
      { text: "Решение головоломок или задач. ", correct: 2 },
      { text: "Организация игр или мероприятий с друзьями. ", correct: 3 },
    ],
  },
  {
    question:
      "'Семь раз отмерь, один раз отрежь'. Как вы подходите к принятию решений: ",
    answers: [
      {
        text: "Консультируясь с другими и учитывая различные точки зрения, чтобы выбрать наиболее оптимальное решение.",
        correct: 1,
      },
      {
        text: "Старательно анализируя все факты и возможности, чтобы принять обоснованное и взвешенное решение.",
        correct: 2,
      },
      {
        text: "Основываясь на своей интуиции и вдохновении, чтобы выбрать наиболее эффективный путь. ",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Ваш друг/подруга нуждается в совете по выбору подходящего подарка для своего родителя. Какой совет вы бы дали?",
    answers: [
      {
        text: "Подарить что-то красивое и оригинальное, чтобы вызвать улыбку и радость.",
        correct: 1,
      },
      {
        text: "Подарить что-то полезное и практичное, что пригодится в повседневной жизни.",
        correct: 2,
      },
      {
        text: "Подарить что-то символическое или эмоциональное, что покажет внимание и заботу.",
        correct: 3,
      },
    ],
  },
  {
    question: "Какую роль играет для вас баланс работы и личной жизни? ",
    answers: [
      {
        text: "Важно иметь достаточно свободного времени для отдыха, хобби и проведения времени с семьей и друзьями. ",
        correct: 1,
      },
      {
        text: "Работа является приоритетом, и я готов(а) вкладывать в нее больше времени и энергии.",
        correct: 2,
      },
      {
        text: "Я стараюсь найти баланс между работой и личной жизнью, чтобы быть успешным и ощущать гармонию. ",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Какую роль играет для вас физическое окружение на рабочем месте?",
    answers: [
      {
        text: "Важно иметь комфортабельное рабочее пространство, удобную мебель и приятную атмосферу. ",
        correct: 1,
      },
      {
        text: "Приоритет отдаются возможности работы в динамичной и энергичной обстановке.",
        correct: 2,
      },
      {
        text: "Физическое окружение не играет важной роли, важнее другие аспекты работы.",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Какую роль играет для вас техническая сложность и вызовы в работе?",
    answers: [
      {
        text: "Мне нравится решать сложные технические задачи и находить инновационные решения.",
        correct: 1,
      },
      {
        text: "Я предпочитаю работу с более простыми техническими задачами и не стремлюсь к высокой сложности. ",
        correct: 2,
      },
      {
        text: "Я готов(а) принимать технические вызовы, но не хочу, чтобы они были основной частью моей работы. ",
        correct: 3,
      },
    ],
  },
  {
    question: "Какую роль играет для вас сотрудничество и работа в команде? ",
    answers: [
      {
        text: "Мне нравится работать в команде, совместно решая задачи и достигая общих целей.",
        correct: 1,
      },
      {
        text: "Я предпочитаю работать самостоятельно, имея возможность контролировать свой рабочий процесс и результаты.",
        correct: 2,
      },
      {
        text: "Сотрудничество и работа в команде имеют значение для меня, но я предпочитаю иметь возможность работать самостоятельно. ",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Какую роль играет для вас возможность обучения и профессионального роста?",
    answers: [
      {
        text: "Важно иметь доступ к обучению, тренингам и развитию навыков для повышения профессионального уровня.",
        correct: 1,
      },
      {
        text: "Предпочитаю стабильность и уверенность в своих навыках, не придавая большого значения обучению и росту.",
        correct: 2,
      },
      {
        text: "Я стремлюсь постоянно развиваться и улучшать свои компетенции, видя в этом источник мотивации. ",
        correct: 3,
      },
    ],
  },
  {
    question:
      "Какую роль играет для вас признание и вознаграждение за вашу работу? ",
    answers: [
      {
        text: "Важно получать признание и похвалу за свои достижения, чтобы чувствовать себя ценным и мотивированным. ",
        correct: 1,
      },
      {
        text: "Самоудовлетворение от выполненной работы и достигнутых результатов является для меня основной мотивацией.",
        correct: 2,
      },
      {
        text: "Мне важно, чтобы моя работа была вознаграждена материально и приносила успех.",
        correct: 3,
      },
    ],
  },
];

// перемешать вопросы
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let scoreA = 0;
let scoreB = 0;
let scoreC = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  scoreA = 0;
  scoreB = 0;
  scoreC = 0;
  nextButton.innerHTML = "Следующий";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  selectedBtn.style.background = "#001e4d";
  selectedBtn.style.color = "white";
  if (selectedBtn.dataset.correct === "1") {
    selectedBtn.classList.add("1");
    scoreA++;
  } else if (selectedBtn.dataset.correct === "2") {
    selectedBtn.classList.add("2");
    scoreB++;
  } else if (selectedBtn.dataset.correct === "3") {
    selectedBtn.classList.add("3");
    scoreC++;
  }
  nextButton.style.display = "block";
}

function calculateResult() {
  if (scoreA > scoreB && scoreA > scoreC) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Front-end!";
  } else if (scoreB > scoreA && scoreB > scoreC) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Back-end!";
  } else if (scoreC > scoreB && scoreC > scoreA) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Marketing!";
  } else if (scoreB == scoreA) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Front-end и Back-end!";
  } else if (scoreC == scoreB) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Back-end и Marketing!";
  } else if (scoreA == scoreC) {
    return "Поздравляю! У вас великий потенциал стать специалистом по Front-end и Marketing!";
  } else {
    return "Результат неопределен.";
  }
}

function showResult() {
  resetState();
  const result = calculateResult();
  questionElement.textContent = result;
  nextButton.innerHTML = "Начать заново";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

// Измененее порта на 301

var xhr = new XMLHttpRequest();
var url = "http://example.com:301/path/to/endpoint"; // Здесь указан новый порт 301
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error("Произошла ошибка:", xhr.status);
    }
  }
};
xhr.send();
