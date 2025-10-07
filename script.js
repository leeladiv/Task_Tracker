let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
document.getElementById("addTaskBtn").onclick = addTask;

function renderTasks() {
  taskList.innerHTML = tasks.map((task, i) => `

    <div class="task-item">
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${i})">
        <span class="${task.completed ? "completed" : ""}">${task.title}</span>
      </div>
      <div>
        <button class="edit" onclick="editTask(${i})">Edit</button>
        <button class="delete" onclick="deleteTask(${i})">Delete</button>
      </div>
    </div>
  `)
}

function addTask() {
  if (!taskInput.value.trim()) return alert("Task cannot be empty!");
  tasks.push({ title: taskInput.value.trim(), completed: false });
  taskInput.value = "";
  renderTasks();
}

function toggleTask(i) {
  tasks[i].completed = !tasks[i].completed;
  renderTasks();
}

function editTask(i) {
  const newTitle = prompt("Edit Task:", tasks[i].title);
  if (newTitle) tasks[i].title = newTitle.trim();
  renderTasks();
}

function deleteTask(i) {
  if (confirm("Delete this task?")) tasks.splice(i, 1);
  renderTasks();
}

renderTasks();


fetch("./tasks.json")
  .then(response => response.json())
  .then(data => console.log("DATA",data))
  .catch(error => console.error('Error:', error));
