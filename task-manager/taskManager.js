/*
○ Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.
*/

function addTask(tasks, task){
    tasks.push(task);
}

function listTasks(tasks){
    console.log(tasks);
}

module.exports = {addTask, listTasks};