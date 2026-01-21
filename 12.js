//Methods:filter(callback),map(callback),forEach(callback),reduce(callback),find(callback),findIndex(callback),sort(callback)
let marks=[90,70,40,89,56]

//filter(selection)
let result1=marks.filter(function(element){
    return element>70
})
console.log(result1)

//eda we do remove function,{}, and unwanted things to =>and make it simple
let result2=marks.filter(element=>element>70)
console.log(result2)


//write a function that can extarct marks greater then 70,pack them into an array and return it
let empty=[]
for (let v of marks){
    if(v>70){
        empty.push(v)
        }
}
console.log(empty)

//find all marks bettween 30 and 90
let result3=marks.filter(function(element){
    return element>30 && element<90
})
console.log(result3)




//map(trasform or modify)
let salaries=[100,200,300]
//add 50 for each salary[150,250,350]
//type1
let result4=salaries.map(function(element){
    return element+50 
})
console.log(result4)
//type2(arrow function)
let result5=salaries.map(element=>element+50)
console.log(result5)


//reduce(aggeretion)
//find sun of markmarks.
let small=marks.reduce((accmulatur,element)=>accmulatur<element?accmulatur:element)
console.log(small)


//find element
//find 23
let result6=marks.find(element=>element===23)
console.log(result6)
//findIndex
let result7=marks.findIndex(element=>element===23)
console.log(result7)
