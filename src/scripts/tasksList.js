import tasksList from '../modules/tasksList/index.js';

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value;
  tasksList.addTask({ task: newTask, completed: false });
  taskInput.value = "";
  displayTasks();
}

const displayTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasksList.displayTasks().forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.task;
    if (task.completed) {
      listItem.style.textDecoration = "line-through";
    }
    listItem.addEventListener("click", () => completeTask(index));
    taskList.appendChild(listItem);
  });
}

const completeTask = (index) => {
  tasksList.completeTask(index);
  displayTasks();
}

displayTasks();

document.getElementById("addTaskBtn").addEventListener("click", addTask);

export default { addTask, displayTasks, completeTask };
