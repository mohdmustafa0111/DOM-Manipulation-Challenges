const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "visibility";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "visibility_off";
  }
});
