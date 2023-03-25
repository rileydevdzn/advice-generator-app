
// Get advice from Advice Slip API

const urlSource = "https://api.adviceslip.com/advice"; 
const quote = document.querySelector('#advice');
const newAdvice = document.querySelector('#generate-btn');


function getAdvice() {
  fetch(urlSource).then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    quote.innerText = `${Adviceobj.advice}`;
  })
};


// Set and update quote counter using random number generator

let counterDisplay = document.querySelector('#advice-counter');
let minCount = 1;
let maxCount = 2000;

function genRandomCount() {
  let randomCount = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
  return randomCount;
}

function updateCounter() {
  let adviceCount = genRandomCount();
  counterDisplay.innerHTML = `${adviceCount}`;
}


// Add event listeners

newAdvice.addEventListener("click", () => {
  getAdvice();
  updateCounter();
});

window.onload = () => {
  getAdvice();
  updateCounter();
};