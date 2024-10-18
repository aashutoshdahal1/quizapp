const data = [
  {
    question: "What is the main function of the heart?",
    options: [
      "To help with digestion",
      "To pump blood throughout the body",
      "To filter toxins",
      "To produce hormones",
    ],
    answer: "To pump blood throughout the body",
  },
  {
    question: "How many hours of sleep do teenagers need on average?",
    options: ["4-6 hours", "7-9 hours", "10-12 hours", "1-3 hours"],
    answer: "7-9 hours",
  },
  {
    question: "Which food is a good source of protein?",
    options: ["Bread", "Chicken", "Fruit", "Ice cream"],
    answer: "Chicken",
  },
  {
    question:
      "What is the recommended amount of physical activity for children and teens?",
    options: [
      "30 minutes a week",
      "1 hour a day",
      "2 hours a day",
      "Only when they feel like it",
    ],
    answer: "1 hour a day",
  },
  {
    question: "What is the best way to prevent the spread of germs?",
    options: [
      "Washing hands regularly",
      "Drinking soda",
      "Eating sweets",
      "Wearing gloves all the time",
    ],
    answer: "Washing hands regularly",
  },
];

// const gameStart = (e) => {
//   e.target.parentElement.style.display = "none";
//   DisplayQuestion();
// };
let i = 0;
let score = 0;

let nextbtn = document.querySelector("#nextbtn");
const DisplayQuestion = () => {
  let questionDisplay = document.querySelector(
    ".container__quizsection--question"
  );
  questionDisplay.innerHTML = data[i].question;
  let totalquestionlength = data.length;

  let container__totalquestionindicator = document.querySelector(
    ".container__totalquestionindicator"
  );

  container__totalquestionindicator.innerHTML = `${
    i + 1
  }/${totalquestionlength}`;

  let optiondisplay = document.querySelectorAll(".option");

  for (let k = 0; k <= 3; k++) {
    optiondisplay[k].textContent = data[i].options[k];
  }
};

DisplayQuestion();

let optioncontainer = document.querySelector(".container__quizsection--option");
optioncontainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("option")) {
    e.target.style.border = "2px solid green";
  }

  //   console.log(data[i].answer);
  //   console.log(e.target.innerHTML);

  if (e.target.innerHTML === data[i].answer) {
    console.log("correct ans");
    return (score += 1);
    nextBtnHandle();
  }
});

const displayResult = () => {
  let container = document.querySelector(".container");
  let optiondiv = document.querySelector(".container__quizsection--option");
  let questiondiv = document.querySelector(".container__quizsection--question");
  let result = document.querySelector(".result");
  nextbtn.style.display = "none";
  questiondiv.style.display = "none";
  optiondiv.style.display = "none";
  result.style.display = "flex";

  result.innerHTML = ` Your Score: ${score}/${data.length}`;
};
const nextBtnHandle = () => {
  let options = document.querySelectorAll(".option");
  options.forEach((e, i) => {
    e.style.border = "2px solid grey";
  });

  if (i < data.length - 1) {
    i++;
    DisplayQuestion();
  } else {
    displayResult();
  }
};

nextbtn.addEventListener("click", nextBtnHandle);

let gameStart = () => {
  let wanttoplaydisplay = document.querySelector(".container__startdisplay");
  let quizsection = document.querySelector(".container__quizsection");
  let optiondiv = document.querySelector(".container__quizsection--option");
  setTimeout(() => {
    wanttoplaydisplay.style.display = "none";
    quizsection.style.display = "block";
    optiondiv.style.display = "block";
    nextbtn.style.display = "flex";
  }, 1000);
};
let startbtn = document
  .querySelector("#playbtn")
  .addEventListener("click", gameStart);
