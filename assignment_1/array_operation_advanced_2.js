// ASSIGNMENT 2: Student Performance Dashboard
//-------------------------------------------

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed
let s1 = students.filter(student => student.marks >= 40);
console.log(s1);

// 2. map() to add grade
let s2 = students.map(student => {
  let grade;
  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return { ...student, grade };
});
console.log(s2);

// 3. reduce() to calculate average marks
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
let avgMarks = totalMarks / students.length;
console.log(avgMarks);

// 4. find() student who scored 92
let s4 = students.find(student => student.marks === 92);
console.log(s4);

// 5. findIndex() of "Kiran"
let s5 = students.findIndex(student => student.name === "Kiran");
console.log(s5);
