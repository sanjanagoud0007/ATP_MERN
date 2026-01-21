//Assignment 3: Age Calculator (Intermediate)
let dob = "2000-05-15";
//1. Calculate exact age in years
function calculateAge(dob) {
    let birthDate = new Date(dob);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log("Age: " + calculateAge(dob) + " years");