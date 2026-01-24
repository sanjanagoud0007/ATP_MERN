import { addTask, getAllTasks, completeTask } from './task.js';
console.log(addTask("Study", "high", "2026-02-01"));
console.log(getAllTasks());
console.log(completeTask(1));
console.log(getAllTasks());