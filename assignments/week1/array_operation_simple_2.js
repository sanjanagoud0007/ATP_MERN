// Assignment 2: Online Course Name Processor
//------------------------------------------

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let c1 = courses.filter(course => course.length > 5);
console.log(c1);

// 2. map() to uppercase
let c2 = courses.map(course => course.toUpperCase());
console.log(c2);

// 3. reduce() to generate single string
let c3 = courses
  .map(course => course.toUpperCase())
  .reduce((acc, course) => acc + " | " + course);
console.log(c3);

// 4. find() the course "react"
let c4 = courses.find(course => course === "react");
console.log(c4);

// 5. findIndex() of "node"
let c5 = courses.findIndex(course => course === "node");
console.log(c5);
