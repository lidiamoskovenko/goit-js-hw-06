const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const valueElement = document.querySelector("#value");

let counterValue = 0;

const newCounterValue = () => {
  valueElement.textContent = counterValue;
};
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    newCounterValue();
  });  

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  newCounterValue();
});


newCounterValue();