//Assignment 1: User Profile Manager

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name)             //read and print name and email
console.log(user.email)
user.lastLogin= "2026-01-01"        //new property
user.role='admin'                  //3.student->role
delete user.isActive               //deleting
console.log(Object.keys(user))   //object.keys()




//Assignment 2: Exam Result Summary
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//1. Calculate total marks
let total =0
for(let i in marks)
{
    total=total+marks[i]
}
console.log(total);
//2. Calculate average marks

console.log(total/4)
//3. Find the highest scoring subject

//4. Add a new subject computer: 90
    marks.computer=90
    console.log(marks)