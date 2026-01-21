let student={
    rollNo:1,
    name:"ram"
}
console.log(student.rollNo)
console.log(student.name)
console.log(student.city)     //undefined city variable
//console.log(student.city.length)   //undefined una variable ke length find cheyalemu(error ostadi)

//the datadsets give by us we know what variables we will be having if we take like some random datasets then first we will check whether it is present or not then return if there 
console.log(student.city?.length??"property not exited ") //?to check and if there then only it will return the value 
//?-optional chaining, ??-nullish coalesing operator  