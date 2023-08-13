const inputEl = document.querySelector("#validation-input");
const length = parseInt(inputEl.getAttribute("data-length"));
function validateInput() {
  const inputValue = inputEl.value;
  
  if (inputValue.length === length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", validateInput);
