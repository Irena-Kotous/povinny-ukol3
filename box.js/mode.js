const toggleButton = document.getElementById("toggleButton");
const documentElement = document.documentElement;

toggleButton.addEventListener("click", function () {
  if (documentElement.getAttribute("data-theme") === "dark") {
    documentElement.setAttribute("data-theme", "light");
  } else {
    documentElement.setAttribute("data-theme", "dark");
  }
});
