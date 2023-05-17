//Interface
//interface are declare only method then define the class and access with body.
//program 1=>
// interface worldBank{
//     save():number
//     loan():number
// }
// class SBI implements worldBank{
//     save(): number {
//         console.log("I am save method from SBI")
//         return 23
//     }
//     loan(): number {
//         console.log("I am loan method from SBI")
//         return 34
//     }
// }
// class PNB implements worldBank{
//     save(): number {
//         console.log("I am save method from PNB")
//         return 22
//     }
//     loan(): number {
//         console.log("I am loan method from PNB")
//         return 56
//     }
//     branchName(){
//         console.log("Amanora Branch")
//     }

// }
// class BOI implements worldBank{
//     save(): number {
//         console.log("I am save method from BOI")
//         return 44
//     }
//     loan(): number {
//         console.log("I am loan method from BOI")
//         return 55
//     }
// }
// let sbi=new SBI()
// console.log(sbi.save())
// console.log(sbi.loan())
// let pnb=new PNB()
// console.log(pnb.save())
// console.log(pnb.loan())
// console.log(pnb.branchName())
// let boi=new BOI()
// console.log(boi.save())
// console.log(boi.loan())

//program 2
// interface student{
//     displayName():string
//     displayAge():number

// }
// interface Teacher{
//     displaysalary():number
// }
// class info implements student,Teacher{
// displayName(): string {
//     return 'rupali'
// }
// displayAge(): number {
//     return 31
// }
// displaysalary(): number {
//     return 333333
// }
// }
// let SS1=new info()
// console.log(SS1)
// console.log(SS1.displayName())
// console.log(SS1.displayAge())
// console.log(SS1.displaysalary())

//program 3
// interface Address{
//     dispayAddress():string
// }
// class GrandFather{
//     firstName:string
//     lastName:string
//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     dispalyGF(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class FatherN extends GrandFather implements Address{
// fname:string
// constructor(fn:string,ln:string,fname:string){
//     super(fn,ln)
//     this.fname=fname
// }
// dispalyFN(): void {
//     console.log(this.fname +this.lastName)
// }
// dispayAddress(): string {
//     return "Flat No=307,A-wing,near Datta mandir,manjri,pune"
// }
// }
// let nn=new FatherN("gajanan","dhokcahule","shrikant")
// // nn.dispalyFN()
// // nn.dispalyGF()
// // nn.dispayAddress()
// console.log(nn)