const btn = document.getElementById(`dropdownBtn`);
const list = document.getElementById(`dropdownList`);
const dropdown = document.querySelector(`.dropdown`);

// Show on hover
dropdown.addEventListener(`mouseenter`, () => {
  list.style.display = `block`;
});

// Hide when mouse leaves
dropdown.addEventListener(`mouseleave`, () => {
  list.style.display = `none`;
});

// Toggle on click
btn.addEventListener(`click`, () => {
  if (list.style.display === `block`) {
    list.style.display = `none`; // hide dropdown
  } else {
    list.style.display = `block`; // show dropdown
  }
});
