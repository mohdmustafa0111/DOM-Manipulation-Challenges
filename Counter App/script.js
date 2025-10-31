const count = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let counter = 0;

increaseBtn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    count.textContent = counter;
  }
});
