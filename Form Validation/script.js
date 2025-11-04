const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Clear success message
  successMsg.textContent = "";

  // Validate fields
  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required");
    isValid = false;
  } else if (!isStrongPassword(passwordInput.value)) {
    showError(
      passwordInput,
      "Password must contain 1 uppercase, 1 number & 1 special char"
    );
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  // If all valid → show success message
  if (isValid) {
    successMsg.textContent = "✅ Form submitted successfully!";
    form.reset(); // optional
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.textContent = message;
  small.style.visibility = "visible";
  input.style.borderColor = "red";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.style.visibility = "hidden";
  input.style.borderColor = "green";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  // Regex: At least 1 uppercase, 1 number, 1 special char, and min 6 chars
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
  return regex.test(password);
}
