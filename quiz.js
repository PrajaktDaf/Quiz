document.addEventListener("DOMContentLoaded", function (){
  const questions = [
    {
        question:"What is JavaScript?",
        options:["Scripting language used to make the Website interactive",
                 "Assembly language used to make the website iteractive",
                 "Compiled language used to make the website iteractive",
                "None of the Mentioned"],
        correctAnswer: "Scripting language used to make the Website interactive",
    },
    {
        question:"Which of the following is a Javascript datatypes?",
        options:["Null type","Undefined type","Number type","All of the mentioned"],
        correctAnswer:"All of the mentioned",
    },
    {
      question:"Inside which HTML element do we put the Javascript?",
      options:["<script>","<scripting>","<js>","<javascript>"],
      correctAnswer:"<script>",
    },
    {
      question:"The external Javascript file must contain the <script> tag",
      options:["True","False"],
      correctAnswer:"False",
    },
    {
      question:"How do you write 'Hello World' in an Alert box?",
      options:["alert('Hello World')","msgBox('Hello World')","msg('Hello World')","alertBox('Hello World')"],
      correctAnswer:"alert('Hello World')",
    },
    {
      question:"How do you create a function in Javascript?",
      options:["function myFunction()","function:myFunction()","function = myFunction()"],
      correctAnswer:"function myFunction()",
    },
    {
      question:"How to write an IF statement in JavaScript?",
      options:["if(i==5)","if i==5 then","if i=5","if i=5 then"],
      correctAnswer:"if(i==5)",
    },
    {
      question:"How does a WHILE loop start?",
      options:["while(i<=10)","while i=1 to 10","while(i<=10;i++)"],
      correctAnswer:"while(i<=10)",
    },
    {
      question:"How does a FOR loop start",
      options:["for(i=0;i<5;i++)","for i=1 to 5","for(i=0;i<=5)","for(i<=5;i++)"],
      correctAnswer:"for(i=0;i<5;i++)",
    },

    {
      question:"How can you add a comment in a Javascript? ",
      options:["// This is comment","<!--This is a comment-->","'This is a comment"],
      correctAnswer:"// This is comment",
    },

    {
      question: "What is the correct way to  Write a Javascript array ?",
      options:["var colors = ['red', 'green','blue']", "var colors= 'red', 'green','blue'", "var colors = 1=('red'),2 = ('green'), 3 = ('blue')","var colors = (1:'red', 2:'green', 3:'blue')"
        ],
      correctAnswer:"var colors = ['red', 'green','blue']",
    },

    {
      question:"How do you round the number 7.25, to the nearest integer?",
      options:["Math.round(7.25)", "rnd(7.25)","Math.rnd(7.25)","round(7.25)"],
      correctAnswer:"Math.round(7.25)",
    },

    {
      question:"How do you find the number with the highest value of  x and Y ?",
      options:["Math.max(x,y)", "Math.ceil(x,y)", "ceil(x,y)", "top(x, y)"],
      correctAnswer:"Math.max(x,y)",
    },

    {
      question:"JavaScript is the same as Java?",
      options:["True", "False"],
      correctAnswer:"False",
    },

    {

      question:"How can you detect the client's browser name?",
      options:["browser.name", "client.navName", "navigator.appName"],
      correctAnswer:"navigator.appName",
    },

    {
      question:"How do you declare a JavaScript variable?",
      options:[" var carName ", " V carName ", " variable carName "],
      correctAnswer:" var carName ",
    },

    {
       question:"Which operator is used to assign a value to a variable?",
       options:[" = ", " * ", " x ", " - "],
       correctAnswer:" = ",
    },

    {
      question:"What will the following code return : Boolean(10 > 9) ?",
      options:["True", "False"],
      correctAnswer:"True",
    },

    {
      question:"Is JavaScript is case-centetive?",
      options:["Yes", "No"],
      correctAnswer:"Yes",
    },

    {
      question:" Which event occurs when the user clicks on an HTML element?",
      options:[" onclick "," onchange ", " onmouseover ", " onmouseclick "],
      correctAnswer:" onclick ",
    },

  ];

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-btn");

  function displayQuestion() {

    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    currentQ.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", ()=> checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
  }

  function displayIndicators(){

    const indicatorsContainer = document.getElementById("indicators");
    indicatorsContainer.innerHTML = "";
    questions.forEach(() => {

        const indicator = document.createElement("div");
        indicator.classList.add("feedback-indicator");
        indicatorsContainer.appendChild(indicator);

    });
  }

  function updateIndicator (index, isCorrect) {

    const indicators = document.querySelectorAll(".feedback-indicator");
    const indicator = indicators[index];
    if (isCorrect) {
        indicator.classList.add("correct");
        indicator.innerHTML = "&#10003";
        
    } else {
        indicator.classList.add("incorrect");
        indicator.innerHTML = "&#10007";
    }
  }

  function checkAnswer(selectedAnswer){

    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.correctAnswer) {
        score++;
        updateIndicator(currentQuestion, true);
    } else {
        updateIndicator(currentQuestion, false);  
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
  }

  function endQuiz () {
    questionElement.textContent ="";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Quiz completed! Your Score is ${score}/${questions.length}.`;
    submitButton.style.display = "none";
  }

  displayIndicators();
  displayQuestion();

})