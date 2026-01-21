//pack objects
let emp={
    empno:1,
    empname:'sam'
}
//accessing properties
console.log(emp.empno)            //op:1

//adding new propetry(dynamic)
emp.city='mumbai'

//update a property
emp.empno=123
console.log(emp)          //op:{empno: 123, empname: 'sam', city: 'mumbai' }

//delete a property
delete emp.empname
console.log(emp)           //op:{ empno: 123, city: 'mumbai' }

//freeze an object
Object.freeze(emp)  // this freeze word make the new elements cant be added as mobile and emp no update
emp.empno=1234
emp.mobile=999999
console.log(emp)       //op:{ empno: 123, city: 'mumbai' }

//read keys
console.log(Object.keys(emp))   //op:[ 'empno', 'city' ]

//read values
console.log(Object.values(emp)) //op:[ 123, 'mumbai' ]