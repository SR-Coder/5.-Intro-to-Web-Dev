// console.log("Hey great job you did it");

// number
let myNum = 1;

// string
let myString = "hello world";

// bool
let isHungry = true;

let lifesAnswers = [
  "42", 
  "don't look for purpose, create it",
  "kobe knows best!!",
  "737",
  "success comes with failure",
  "coding 101",
  "all signs point to no!!",
  "if you aint first ya last",
  "yes",
  "It is unlikely",
  'makie a tic toc about it!',
  "ask Siri"
];

// keyword

function oracle(){
  let len = lifesAnswers.length;
  let randNum = Math.random() * len;
  let idx = Math.floor(randNum);
  
  let element = document.getElementById("answer");
  element.innerText = lifesAnswers[idx];
  
  setTimeout( () => {
    element.innerText = "Ask a Question!!!!";
  }, 2500 );
  
  
};

var time = 250;

function rotate(element){
   console.log(element);
  element.classList.remove("un-rotate")
  element.classList.add("rotate")
  setTimeout( () => {
    element.id = "cardFace";
  }, time )
};

function unRotate(element){
  element.classList.remove("rotate");
  element.classList.add("un-rotate");
  setTimeout( () => {
    element.id = "";
  }, time )
};

