/*let test={
    a:10,
    b:20,
    c:30
}
//umpack object(destructing)
let{a,b,c,x}=test
console.log(a)
console.log(b)
console.log(c)
console.log(x) //undefined as we did not store anything so we cant unpack it 
//as per our needs we can unpack the objects like if need only 2 we take output for 2 even by passing all object
*/
//complex object 
let student={
    sno:100,
    name:'sam',
    marks:[90,86,89],
    address:{
        city:'hyderabad',
        pincode:550088
    },      // address needs to stored in object not the array coz it is not homogenous.
    getData:function(){
        //object proccessing bussiness logic
        //this refers to current object ie whether we have write 
        console.log(this.marks[0])
        //find average marks of student and return
        let total=0
        for(let i=0;i<3;i++)
        total += this.marks[i]
        return total/3
    }
}
console.log(student.marks)    //op:[ 90, 86, 89 ]
console.log(student.address.city)  //op:hyderabad
console.log(student.getData())  //edi getData una vi excute chestadi
