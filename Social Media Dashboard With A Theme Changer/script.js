const toggleButton = document.getElementById("dark_mode");
const body = document.getElementById("body");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
