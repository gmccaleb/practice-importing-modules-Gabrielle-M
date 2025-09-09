/*
○ Use the fs (File System) built-in module to define and export the
following functions:
1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format.
2. loadTasks(filePath): Reads and parses the tasks from the file. If the file doesn’t exist, return an empty array.
*/

const fs = require('fs');

function saveTasks(filePath, tasks){

    try{
    fs.appendFileSync(filePath, JSON.stringify(tasks));
    console.log('Successful, task has been added');
    } catch(err){
        console.error('Error, task not added')
    }
    
}



function loadTasks(filePath){

    if (!fs.existsSync(filePath)){
        console.log('Error, file does not exist');
        return [];
    } else {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

}

module.exports = {saveTasks, loadTasks};