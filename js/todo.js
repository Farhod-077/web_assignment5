// Task 8
let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

function render() {
  todoList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    if (task.done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = task.text;
    span.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") {
    return;
  }
  tasks.push({ text: value, done: false });
  taskInput.value = "";
  render();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});