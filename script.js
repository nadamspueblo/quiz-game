// These vars store the score each hero receives based on the user's answers
let carrotronScore = 0;
let broccaScore = 0;
let kernelatorScore = 0;
let tomatinScore = 0;

// Sets up the click events - DO NOT MODIFY this function
function init() {
  addClickEvent("start-button", startQuiz);
  addClickEvent("answer1a", checkAnswer);
  addClickEvent("answer1b", checkAnswer);
  addClickEvent("answer1c", checkAnswer);
  addClickEvent("answer1d", checkAnswer);
  addClickEvent("answer2a", checkAnswer);
  addClickEvent("answer2b", checkAnswer);
  addClickEvent("answer2c", checkAnswer);
  addClickEvent("answer2d", checkAnswer);
  addClickEvent("answer3a", checkAnswer);
  addClickEvent("answer3b", checkAnswer);
  addClickEvent("answer3c", checkAnswer);
  addClickEvent("answer3d", checkAnswer);
}

function startQuiz() {
  // Hide start screen
  hide("start-screen");

  // Show first question
  show("q1-screen");
}

function question1(choice) {
  /* The variable choice will contain a 1 letter string associated with the choice that the user made: "a", "b", "c", or "d". Code a set of conditionals to categorize answers based on which button the user clicks and then add 1 to the appropriate hero score variable(s) (you descide which hero(s) gets how many points for which answer)
  */ 

  if (choice == "a") {
    tomatinScore = tomatinScore + 1;
  }
  else if (choice == "b") {
    broccaScore = broccaScore + 1;
  }
  else if (choice == "c") {
    carrotronScore = carrotronScore + 1;
  }
  else {
    kernelatorScore = kernelatorScore + 2;
  }

  
  // Hide q1 screen
  hide("q1-screen");
  // Show q2 screen
  show("q2-screen");
}

function question2(choice) {
  if (choice == "a") {
    kernelatorScore = kernelatorScore + 1;
  }
  else if (choice == "b") {
    carrotronScore = carrotronScore + 1;
  }
  else if (choice == "c") {
    tomatinScore = tomatinScore + 1;
  }
  else {
    broccaScore = broccaScore + 1;
  }
  
  hide("q2-screen");
  show("q3-screen");
}

function question3(choice) {
  if (choice == "a") {
    broccaScore = broccaScore + 1;
  }
  else if (choice == "b") {
    tomatinScore = tomatinScore + 1;
  }
  else if (choice == "c") {
    carrotronScore = carrotronScore + 1;
  }
  else {
    kernelatorScore = kernelatorScore + 1;
  }
  
  hide("q3-screen");
  showResults();
}

function showResults() {
  /* Show the hero that received the highest score */
  if (kernelatorScore > tomatinScore && kernelatorScore > broccaScore){
    show("kernelator-screen");
  }
  else if (tomatinScore > kernelatorScore && tomatinScore > broccaScore) {
    show("tomatitan-screen");
  }
  else if (broccaScore > kernelatorScore && broccaScore > tomatinScore) {
    show("brocca-screen");
  }
  else {
    show("easteregg-screen");
  }
}

/* This will call the appropriate question function with the user's choice. DO NOT MODIFY this function */ 
function checkAnswer(click) {
  let id = click.target.id;
  console.log(id);
  
  if (id == "answer1a") {
    question1("a");
  }
  else if (id == "answer1b"){
    question1("b");
  }
  else if (id == "answer1c"){
    question1("c");
  }
  else if (id == "answer1d"){
    question1("d");
  }
  else if (id == "answer2a"){
    question2("a");
  }
  else if (id == "answer2b"){
    question2("b");
  }
  else if (id == "answer2c"){
    question2("c");
  }
  else if (id == "answer2d"){
    question2("d");
  }
  else if (id == "answer3a"){
    question3("a");
  }
  else if (id == "answer3b"){
    question3("b");
  }
  else if (id == "answer3c"){
    question3("c");
  }
  else if (id == "answer3d"){
    question3("d");
  }
}

init();
