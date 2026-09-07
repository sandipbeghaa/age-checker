const input = document.querySelector ("#input-number");
const button = document.querySelector ("#check-age-btn");
const result = document.querySelector("#result-display");

button.addEventListener("click", () => {

  const age = Number(input.value);
  console.log(age);


  if (input.value === "" || age <= 0 || age > 120 || Number.isNaN(age) || !Number.isInteger(age)) {
    result.textContent = "Please enter a valid age";
    return;
  }


  if (age <=17) {
      result.textContent = "You are a Minor.";
    } else if (age <=39) {
      result.textContent = "You are an Adult.";
    } else if (age <= 59) {
      result.textContent = "You are Middle-aged.";
    } else if (age <= 69) {
      result.textContent = "You are a Senior citizen.";
    } else {
      result.textContent = "You are Elderly.";
    }
});


