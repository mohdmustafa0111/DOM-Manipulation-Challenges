let count = 10;
const countEl = document.getElementById("count");

const timer = setInterval(() => {
  countEl.textContent = count;
  count--;

  if (count < 0) {
    clearInterval(timer);
    countEl.textContent = "Time's up!";
  }
}, 1000);
