const registrationForm = document.getElementById("registration-form");
const passwordMatchMessage = document.getElementById("password-match");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;

function showPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password === confirmPassword) {
    document.getElementById("password-match").innerHTML = "Hesla se shodují.";
  } else {
    document.getElementById("password-match").innerHTML =
      "Hesla nejsou stejná.";
  }
}
document
  .getElementById("confirm-password")
  .addEventListener("input", showPasswordMatch);
