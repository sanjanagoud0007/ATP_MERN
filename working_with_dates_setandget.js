let date1=new Date(2022,4,5)
let date2=new Date(2024,0,1)

//find difference 
if(date1>date2){
    [date1,date2]=[date2,date1]
}
//find years
let years=date2.getFullYear()-date1.getFullYear()
//find months
let month=date2.getMonth()-date1.getMonth()
//find days
let day=date2.getDate()-date1.getDate()

if(month<0){
    years--;
    month=month+12
}
if(day<0){
      month--
    // get number of days in previous month of date2
    let prevMonthLastDay = new Date(date2.getFullYear(),date2.getMonth(),0).getDate()
    day += prevMonthLastDay
}
console.log("years:",years)
console.log("month:",month)
console.log("day:",day)