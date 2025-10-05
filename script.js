 let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    alert("Task cannot be empty!");
    return;
  }

  const newTask = { title: text, completed: false };
  tasks.push(newTask);

  displayTasks();
  taskInput.value = "";
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    const taskText = document.createElement("span");
    taskText.textContent = task.title;

    if (task.completed) {
      taskText.classList.add("completed");
    }

    taskText.addEventListener("click", () => toggleComplete(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  });
}
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}