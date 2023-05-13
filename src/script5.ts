// class PersonX{
//     msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     displayMsg(){
//         console.log(this.msg)
//     }
// }
// let a1=new PersonX("i am learning js")
// console.log(a1)
// a1.displayMsg()


// //program 2
// class PersonZ{
//     private msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     public displayMsg(){
//         console.log(this.msg)
//         return this.msg
//     }
// }
// let a11=new PersonZ("i am learning cypress")
// console.log(a11)
// let a12=a11.displayMsg()
// console.log(a12)

// //program 3
// class PersonXX{
//     private msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     private displayMsg(){
//         console.log(this.msg)
//         return this.msg
//     }
//     public callDisplay(){
//         this.displayMsg()
//     }
// }
// let a23=new PersonXX("i am learning typescript")
// a23.callDisplay()

//program 4
//use proytected
class StudentA {
    // firstName: string
    // lastName: string
    // constructor(fn:string,ln:string){
    //     this.firstName=fn
    //     this.lastName=ln
    // }
    constructor(protected firstName:string,public lastname:string){
//protected is only avaliable in class or inherited class
    }
    display():string{
        return this.firstName+this.lastname
    }

}
class Teacher extends StudentA{
   salary:number
    constructor(firstName:string,lastName:string,salary:number){
super(firstName,lastName)
this.salary=salary
    }
    displayFirstName():string{
        return this.firstName
    }
    
}
let rupa=new Teacher("rupa","dhokchaule",78000)
//console.log(rupa.firstName)//protected is only avaliable in class or inherited class
console.log(rupa.lastname)
console.log(rupa.salary)

//Readonly=
class ProfessorA{
    readonly professor:string;
    constructor(pr:string){
        this.professor=pr
    }
}
let re=new ProfessorA("English")
console.log(re.professor)