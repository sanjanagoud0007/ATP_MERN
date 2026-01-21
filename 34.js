let person1={
    pid:100,
    name:'sam'
}
let person2={
    pid:200,
    name:'ram'
}                          //ela kuda objects create cheychu kani 100 cheyalli ante we will have so much of dupilicate code ante same repeat aaythadi so we cretae class 

//create 100 person objects
//create person datatype
class person{
    //properties
    pid;         //we dont directly instalize (pid=100)as all the object will take same value so we just declare the variable 
    #age;
    static collegeName;
    //methods
    static{
        person.collegeName='anurag'
    }
    counstructor(pid,age){
        this.pid=pid;
        this.#age=age;
    }
    /*we can pass parameter no need to write function separetly 
    setData(pid,age){
        this.pid=pid;
        this.age=age;
    }*/
    getPersonData(){
        console.log(this.pid,this.#age,this.collegeName)
    }
}
//create objects of person type
let p1=new person(100,21)
let p2=new person(200,19)

p1.getPersonData()
p2.getPersonData()