//ASSIGNMENT 2:

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
let r1=students.filter(studentsObj=>studentsObj.marks)
console.log(r1)

//2. map() to add a grade field
let r2 = students.map(student => {
  let grade;
  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return { ...student, grade };
});
console.log(r2);

//3. reduce() to calculate average marks
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
let average = totalMarks / students.length;
console.log("Average Marks:", average);

//4. find() the student who scored 92
let r4 = students.find(student => student.marks === 92);
console.log(r4);

//5. findIndex() of student "Kiran"
let r5 = students.findIndex(student => student.name === "Kiran");
console.log(r5);

