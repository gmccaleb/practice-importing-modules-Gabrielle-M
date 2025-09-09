/*
○ Import the custom modules (taskManager.js and fileHandler.js)
and the path built-in module.
○ Implement the following functionality:

1. Load existing tasks from a file named tasks.json.
2. Add new tasks to the list.
3. List all tasks.
4. Save the updated task list back to the file.
*/

const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const filePath = path.join(__dirname, "tasks.json")

// Load existing tasks
let tasks = fileHandler.loadTasks(filePath);

// Add new tasks
taskManager.addTask(tasks, "Complete assignment");
taskManager.addTask(tasks, 'Study');

// List all tasks
taskManager.listTasks(tasks);

// Save updated tasks
fileHandler.saveTasks(filePath, tasks);