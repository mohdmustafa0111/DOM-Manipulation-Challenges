const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // ✅ Create new <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // ✅ Create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("delete-btn");

  // ✅ Append delete button to li
  li.appendChild(delBtn);

  // ✅ Append li to ul
  taskList.appendChild(li);

  // ✅ Clear input field
  input.value = "";

  // ✅ Delete functionality
  delBtn.addEventListener("click", () => {
    li.remove(); // Removes that specific task
  });
});
