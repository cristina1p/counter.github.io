// Target elements
const counterDisplay = document.querySelector(".counterDisplay");
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset");

//wrapper.style.display = "block";

// Increment function
let counter = 0;
counterDisplay.innerHTML = counter;
const incrementNum = () => {
  ++counter; // increment the counter
  counterDisplay.innerHTML = counter; // Update the display
};

// Add eventListener to incrementBtn
incrementBtn.addEventListener("click", incrementNum);

// Decrement function
const decrementNum = () => {
  if (counter > 0) {
    --counter;
  } else {
    counter;
  }
  counterDisplay.innerHTML = counter; // Update the display
};

// Add eventListener to decrementBtn
decrementBtn.addEventListener("click", decrementNum);

// Reset function
const resetNum = () => {
  counter = 0; // Reset counter to 0
  counterDisplay.innerHTML = counter;
};

// Add eventListener to resetBtn
resetBtn.addEventListener("click", resetNum);
