// Task 2
const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text has been changed!";
});

// Task 3
const styleBox = document.getElementById("styleBox");
const bgBtn = document.getElementById("bgBtn");
const fontBtn = document.getElementById("fontBtn");

bgBtn.addEventListener("click", function () {
  styleBox.style.backgroundColor = "lightblue";
});

fontBtn.addEventListener("click", function () {
  styleBox.style.fontSize = "30px";
});

// Task 4
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
let itemCount = 0;

addItemBtn.addEventListener("click", function () {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = "Item " + itemCount;
  itemList.appendChild(li);
});

removeItemBtn.addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});