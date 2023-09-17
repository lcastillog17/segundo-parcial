const tasksList = {
  tasks: [],
  addTask: (task) => tasksList.tasks.push(task),
  completeTask: (index) => (tasksList.tasks[index].completed = true),
  displayTasks: () => tasksList.tasks,
};

export default tasksList;
