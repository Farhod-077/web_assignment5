// Task 5
const hoverBox = document.getElementById("hoverBox");
const originalColor = "#cfd8ea";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "orange";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
});

// Task 6
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function () {
  liveOutput.textContent = liveInput.value;
});