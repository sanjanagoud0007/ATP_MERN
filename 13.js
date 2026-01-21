//students
let students=[
    {sno:1,name:"ravi",age:21},
    {sno:2,name:"vikas",age:19},
    {sno:3,name:"manu",age:15},
    {sno:4,name:"madhu",age:30}
];

//find students age less than 20
let result1=students.filter(studentObj=>studentObj.age<20)
console.log(result1)

//increment age by 2 years for manoj
let result2=students.map(studentObj=>{
    if(studentObj.name==="manu"){
        return {
            sno:studentObj.sno,
            sname:studentObj.name,
            age:studentObj.age+2
    }
}
    return studentObj
})
console.log(result2)

//find sum of ages of all students
let result3=students.reduce((acc,studentObj)=>acc+studentObj.age,0)
console.log(result3)