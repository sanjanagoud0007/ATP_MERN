// ASSIGNMENT 3: Employee Payroll Processor
//----------------------------------------

// Test Data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let e1 = employees.filter(emp => emp.department === "IT");
console.log(e1);

// 2. map() to add netSalary with 10% bonus
let e2 = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log(e2);

// 3. reduce() total salary payout
let e3 = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(e3);

// 4. find() employee with salary 30000
let e4 = employees.find(emp => emp.salary === 30000);
console.log(e4);

// 5. findIndex() of "Neha"
let e5 = employees.findIndex(emp => emp.name === "Neha");
console.log(e5);