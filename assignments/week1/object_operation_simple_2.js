// Assignment 2: Exam Result Summary
//---------------------------------

// Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
let total = Object.values(marks).reduce((acc, val) => acc + val, 0);
console.log("Total Marks:", total);

// 2. Calculate average marks
let average = total / Object.values(marks).length;
console.log("Average Marks:", average);

// 3. Find highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Subject:", highestSubject);

// 4. Add new subject computer
marks.computer = 90;
console.log(marks);
