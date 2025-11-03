// const toggleBtn = document.getElementById("theme-toggle");
// const body = document.body;

// // Toggle theme on button click
// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("dark");

//   // Update button text based on current theme

//   if (body.classList.contains("dark")) {
//     toggleBtn.textContent = "☀️ Light Mode";
//   } else {
//     toggleBtn.textContent = "🌙 Dark Mode";
//   }
// });

// Here’s the same functionality 👇 — but using localStorage.

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
} else {
  body.classList.remove("dark");
  toggleBtn.textContent = "🌙 Dark Mode";
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update button text and Save choice in localStorage
  const isDark = body.classList.contains("dark");

  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
