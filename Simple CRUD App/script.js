const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

let items = JSON.parse(localStorage.getItem("items")) || [];
let editIndex = null; // To track which item is being edited

// 🔄 Render all items
function renderItems() {
  list.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <span>${item}</span>
          <div class="actions">
            <button class="editBtn" data-index="${index}">✏️ Edit</button>
            <button class="deleteBtn" data-index="${index}">❌ Delete</button>
          </div>
        `;
    list.appendChild(li);
  });
  localStorage.setItem("items", JSON.stringify(items));
}

// ➕ Add / Update item
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return alert("Please enter something!");

  if (editIndex === null) {
    // Add new item
    items.push(value);
  } else {
    // Update existing item
    items[editIndex] = value;
    editIndex = null;
    addBtn.textContent = "Add"; // Reset button text
  }

  input.value = "";
  renderItems();
});

// ✏️ Edit item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {
    editIndex = e.target.dataset.index;
    input.value = items[editIndex];
    addBtn.textContent = "Update"; // Change button text
  }

  // ❌ Delete item
  if (e.target.classList.contains("deleteBtn")) {
    const index = e.target.dataset.index;
    items.splice(index, 1);
    renderItems();
  }
});

// 🚀 Initial render
renderItems();
