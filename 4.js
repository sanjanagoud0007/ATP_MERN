//smart login Status engine
let isLoggedIn=true
let isProfileComplete=false
function data1(a,b){
    let m
    if(a!=true) m="please login"
    else if(a==true && b==false) m="complete your profile"
    else if(a==true && b==true) m="welcome back"
    console.log(m)
}
data1(isLoggedIn,isProfileComplete)

//budegt question
function price(p){
    let s
    if(p<500) s="budegt course"
    else if (p<=500 && p>=1000) s='standard course'
    else if(p>1000) s='premium course'
    console.log(s)
}
let p=1200
price(p)
