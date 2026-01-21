//create date
let date1=new Date()//system time
let date2=new Date('2022-1-12')//by passing sting
let date3=new Date(2022,0,12)//year,month ,date(isodate)
let date4=new Date(Date.now())//timestamp
let date5=new Date(2022,0,0) //default date is 
let date6=new Date(2022,0,0)
console.log("date1 is ", date1)
console.log(Date.now())
console.log(date1.toString())
console.log(date2.toString())
console.log(date3.toString())
console.log(date4.toString())
console.log(date5.toString())
console.log(date6.toString())