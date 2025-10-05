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

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.addEventListener("click", () => {
      if (editBtn.textContent === "Edit") {
        // Replace text with input box for editing
        const input = document.createElement("input");
        input.type = "text";
        input.value = task.title;
        taskItem.replaceChild(input, taskText);
        editBtn.textContent = "Save";
      } else {
        // Save edited task title
        const input = taskItem.querySelector("input");
        const newValue = input.value.trim();
        if (newValue) {
          tasks[index].title = newValue;
          displayTasks();
        } else {
          alert("Task cannot be empty!");
        }
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    taskItem.appendChild(taskText);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  });
}