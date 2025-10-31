// Select elements
const box = document.querySelector(".box");
const btn = document.getElementById("toggleBtn");

// Add click event listener
btn.addEventListener("click", () => {
  // Toggle the 'active' class
  box.classList.toggle("active");
});

// Toggle adds or removes a CSS class automatically, depending on whether the
// class already exists on that element.

// 🧠 Simple Logic Behind It

// -> If the element doesn’t have the class → ✅ it adds it.
// -> If the element already has the class → ❌ it removes it.
