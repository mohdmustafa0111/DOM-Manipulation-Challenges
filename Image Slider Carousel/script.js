// script.js
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// Function to show the correct slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Next button logic
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length; // loop forward
  showSlide(currentIndex);
});

// Prev button logic
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // loop backward
  showSlide(currentIndex);
});
