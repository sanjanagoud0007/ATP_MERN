import { validateDueDate, validatePriority, validateTitle } from './validate.js';
const tasks = [];

//add new task

function addTask(title, priority, dueDate) {
    if (validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)) {
        const newTask = {
            id: tasks.length + 1,
            title: title,
            priority: priority,
            dueDate: dueDate,
            completed: false
        };
        tasks.push(newTask);
        return "Task added successfully";
    } else {
        return "Invalid task data";
    }
}


// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        return "Task marked as complete";
    } else {
        return "Task not found";
    }
}



export { addTask, getAllTasks, completeTask } ;