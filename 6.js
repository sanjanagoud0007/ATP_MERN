//object (pack of properties)
let empObj={
    empno:100,
    name:'anvesh',
    age:23
}

//accessing prop
console.log(empObj.empno)//
console.log(empObj.name)
console.log(empObj.age)
console.log(empObj.city) // here it shows undefiene as city is not there

//iterate an object 
for(let v in empObj){
    console.log(v ,'is',empObj[v])
}


//create student object with properties rollNo,name,age ,city
let stuObj={
    rollno:100,
    name:'anvesh',
    age:23,
    city:'hyderabad'
}

//accessing prop
console.log(stuObj.rollno)
console.log(stuObj.name)
console.log(stuObj.age)
console.log(stuObj.city) 

//iterate an object 
for(let v in stuObj){
    console.log(v ,'is',stuObj[v])
}

//create product obj with props product name,brand, price