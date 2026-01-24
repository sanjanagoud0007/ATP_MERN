//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-25");
//1.Check if:
//* Today is before deadline → "Enrollment Open"
//* Today is after deadline → "Enrollment Closed"
let today = new Date();
if(today<enrollmentDeadline){
    console.log("Enrollment Open")
}
else{
    console.log("Enrollment Close")
}

//2. Validate user input date:
//* Input: "2026-02-30"
let input = "2026-02-30";
let userDate = new Date(input);
const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];// months human read able ga ravali ante oka list lo store cheskovali
let [y, m, d] = input.split("-").map(Number);//split breks into part ante year,month,date sepeate aayi malla compare aaythai to the input
if (userDate.getFullYear() === y && userDate.getMonth()+1 === m  && userDate.getDate() === d)//+1 to month converts to human readable
 {
    console.log("Valid Date");
    console.log("Year:", userDate.getFullYear());
    console.log("Month:", Months[userDate.getMonth()]);
    console.log("Day:", userDate.getDate());
} 
else {
    console.log("Invalid Date");
}