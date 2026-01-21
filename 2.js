//sum of 2 numbers
//functions declartaions
function sum(v,s){
    console.log("hello")
    let sum =v+s;
    return sum
}
//function calling
let result= sum(10,20)
console.log(result)
console.log(typeof sum)



//greater of 3 numbers

function greater_of_3_numbers(a,b,c){
   if(a>b && a>c) return a
    else if(b>a && b>c) return b
    else return c
}
let  d=greater_of_3_numbers(12,4,7)
console.log(d)



