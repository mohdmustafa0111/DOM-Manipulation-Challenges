const openBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
