// const faqContainer = document.querySelector(".faq-container");

// faqContainer.addEventListener("click", (e) => {
//   if (
//     e.target.classList.contains("faq-question") ||
//     e.target.parentElement.classList.contains("faq-question")
//   ) {
//     const item = e.target.closest(".faq-item");
//     item.classList.toggle("active");
//   }
// });

// Auto-Close Version 👇

const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".faq-item");
  if (!clicked) return;

  // Close all others first
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== clicked) {
      item.classList.remove("active");
    }
  });

  // Toggle the clicked one
  clicked.classList.toggle("active");
});
