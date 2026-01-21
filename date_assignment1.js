//Assignment 1: Date Creation & Extraction (Beginner)
//1. Create a Date object for current date & time.
let date=new Date()
//let time=new time()
console.log(date.toString())
//2. Extract and display:
//* Year
let year=date.getFullYear()
console.log(year.toString())
//* Month (human readable)
const Months=['january','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
let month=date.getMonth()
console.log(Months[month].toString())
//* Date
let dates=date.getDate()
console.log(dates.toString())
//* Day of week
let week=date.getDay()
const weeks=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
console.log(weeks[week].toString())
//* Hours, minutes, seconds
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
console.log(hours.toString())
console.log(minutes.toString())
console.log(seconds.toString())

// 3. Display the date in this format:
// DD-MM-YYYY HH:mm:ss
function format(n) {
  return n < 10 ? "0" + n : n;
}
let formattedDate =
  format(dates) + "-" +format(month + 1) + "-" +year + " " +
  format(hours) + ":" +format(minutes) + ":" +format(seconds);
console.log(formattedDate);




