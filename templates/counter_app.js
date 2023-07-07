
let counterValue = "0";
function increment() {
  counterValue = +counterValue + 1 ;
  updateCounter();
}

function decrement() {
  if (counterValue>0){
    counterValue = +counterValue - 1;
    updateCounter();
  }
  else{
    alert("Not Possible")
  }
}

function reset() {
  counterValue = "0";
  updateCounter();
}

function updateCounter() {
  document.querySelector('.counter-value').textContent = counterValue;
}