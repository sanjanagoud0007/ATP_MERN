//data copy:oka file ni copy chei inko location lo peti modify chekovadam . modify cheste first file modify kavadu just change cheisna ie copy file aa modify avali 

let data=100;
//create copy
let dataCopy=data;
//check
data=200;
console.log("data :",data)
console.log("dataCopy:",dataCopy)

let obj={
    a:10,
    b:20
}

//create copy
//let copyObj=obj;//wrong create obj//ela cheste manam obj and copy obj both gets modified based on conditions so copy crete kale ani ardham
//shallow copy
let copyObj={...obj}//this is correct way of copying obj//(only3 dotsit is spread operator )
//check
obj.a=1234;
console.log("obj:",obj)
console.log("copyObj:",copyObj)

let student1={
    collegeName:"anurag university",
    collegeAddress:{
        street:"uppal",
        pincode:500088
    },
    studentAddress:{
        street:"kphb"
    }
}
//deep copy
//let student2={...student1}
let student2=structuredClone(student1)
//check
student1.collegeName="abcd"
student1.studentAddress.street='miyapur'
console.log("student 1:",student1)
console.log("student 2:",student2)