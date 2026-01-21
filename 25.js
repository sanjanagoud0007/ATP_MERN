// Assignment 3: Student Marks List
//--------------------------------

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40
let m1 = marks.filter(mark => mark >= 40);
console.log(m1);

// 2. map() add 5 grace marks
let m2 = marks.map(mark => mark + 5);
console.log(m2);

// 3. reduce() to find highest mark
let m3 = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log(m3);

// 4. find() first mark below 40
let m4 = marks.find(mark => mark < 40);
console.log(m4);

// 5. findIndex() of mark 92
let m5 = marks.findIndex(mark => mark === 92);
console.log(m5);