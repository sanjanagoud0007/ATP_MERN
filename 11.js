//array operations
//callback function - a function send as argument to another function 
//functions are called/invoked by application
function test1(a){
    console.log(a())     //123
}
//here anonymous function is a callback function
test1(function(){
    return 123;
})



let skills=['html','css','javascript']
//assecing elements(destructre)
let[a,b,c]=skills;
console.log(a)   //html


//inserting 
//at start
skills.unshift('angular')
// console.log(skills)      //[ 'angular', 'html', 'css', 'javascript' ]
//at end
skills.push('node')
console.log(skills)     // [ 'angular', 'html', 'css', 'javascript', 'node' ]
//in middle
skills.splice(2,0,'react')   //splice(index no.,no. of elemnets to delete, string name )
console.log(skills)     //[ 'angular', 'html', 'react', 'css', 'javascript', 'node' ]

//delete 
//at start
skills.shift(skills)
console.log(skills)  //[ 'html', 'react', 'css', 'javascript', 'node' ]

//at end
skills.pop(skills)
console.log(skills)  //[ 'html', 'react', 'css', 'javascript' ]

//in between
skills.splice(1,2)
console.log(skills)   //[ 'html', 'javascript' ]
