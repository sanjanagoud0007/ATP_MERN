//array (ordered collection)
let marks=[90,87,89]
let skills=['html','javascript','angular']

//access elements
console.log(marks[0])//returns the value placed in index
console.log(marks[1])
console.log(marks[2])
console.log(marks[10])// this gives undefined coz no index is there

//iterate
/*for(let index=0;index<marks.length;index --)
//this above for gives us undefined infinte times{
    console.log(marks[index])
}*/
//for=of loop
for (let v of marks){
    console.log(v)
}
//finding sum of marks using for-of loop
let sum=0
for (let v of marks){
    sum=sum+v
}
    console.log(sum)

//function small elemnt 
function small(a)
{
    let sn=a[0]
    for (let v of a){
        if(sn>v)
        {
            sn=v
        }
    }
    return sn;
}
console.log(small(marks))

//assignemt 2(skill and skillname)

function findskill(skills,skillname){
    for(let i=0,i<a.length;i++)
    {
        if(a[i]==0)
        {
            console.log('index is' , i)
             console.log('index is' , a[i])
        }
    }
}
let result=findskill(skills,'java')