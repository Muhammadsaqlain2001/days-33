// factory faction
// function personMaker(name, age){
//    const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`)
//         }
//     }
//     return person
// }
// let p1 =personMaker("salqian", 23)
// let p2 =personMaker("ali", 23)
// let p3 =personMaker("ahmad", 23)
// let p4 =personMaker("haris", 23)
// console.table(p1, p2, p3, p4)


// constructor function
// function Person(name, age){
//        this.name =name;
//        this.age = age;
//     }
// Person.prototype.talk=()=>{
//     console.log(`Hi, my name is ${this.name}`)
// }

// class mehod *****************************
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// classes Inheritance
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name,age)//parent class constructor call
        this.marks = marks;
    }
    
}
class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age)//parent class constructor call
        this.subject = subject;
    }
    
}


