//Assignment 1: Daily Temperature Analyzer

const temp = [32, 35, 28, 40, 38, 30, 42];

//1. filter() temperatures above 35
let r1=temp.filter(element=>element>35)
console.log(r1)
//2. map() to convert all temperatures from Celsius → Fahrenheit
let r2=temp.map(element=>((element*1.8)+32))
console.log(r2)
//3. reduce() to calculate average temperature
let avg=temp.reduce((acc,element)=>(acc+element))
let r3=avg/temp.length
console.log(r3)
//4. find() first temperature above 40
let r4=temp.find(element=>element>40)
console.log(r4)
//5. findIndex() of temperature 28
let r5=temp.findIndex(element=>element===28)
console.log(r5)


