const searchBox = document.getElementById("searchBox");
const itemList = document.getElementById("itemList");
const listItems = itemList.getElementsByTagName("li");

searchBox.addEventListener("keyup", () => {
  const filter = searchBox.value.toLowerCase();

  // Convert HTMLCollection to an array first
  Array.from(listItems).forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(filter)) {
      item.style.display = ""; // ✅ Show the item
    } else {
      item.style.display = "none"; // ❌ Hide the item
    }
  });
});
