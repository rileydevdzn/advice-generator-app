
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


// Set and update quote counter

let counterDisplay = document.querySelector('#advice-counter');
let adviceCount = 0;

function updateCounter() {
  adviceCount++;
  counterDisplay.innerHTML = `${adviceCount}`;
}


// Add event listeners

newAdvice.addEventListener('click', () => {
  getAdvice();
  updateCounter();
});

window.onload = () => {
  getAdvice();
  updateCounter();
};