//program 1
let Name: string[] = ["rupa", "radha", "vardha"]
console.log(Name)
let num:number[]=[12,11,23,44,55]
console.log(num)
//===========================================================
// array of(touple)
// let info3: [number, string, string]
// info3 = [2343, "hi", "hello"]
// console.log(info3)//[ 2343, 'hi', 'hello' ]
// let info4:[string,number,string]
// info4=["hi",23,"hello"]
// console.log(info4)//[ 'hi', 23, 'hello' ]
// let xy:[number,number,number]
// xy=[22,3,3]
// xy.push(45)
// console.log(xy)


//============================================================
//progamm2
//enum=>admin,customer,student manger(enum=>oraganistion)
// 1=>
// enum Roles {
//     admin,
//     customer,
//     student,
//     manger
// }
// if (Roles.admin) {
//     console.log("I work as admin")
// }
// if (Roles.customer) {
//     console.log("I work as customer")
// }
// if (Roles.student) {
//     console.log('I work as student')
// }
// if (Roles.manger) {
//     console.log('I work as manger')
// }

//=======================================================
//2=>
// enum Direction {
//     North,
//     South,
//     East,
//     West
// }
// if (Direction.North) {
//     console.log('I am North')
// }
// if (Direction.South) {
//     console.log("I am South")
// }
// if (Direction.East) {
//     console.log("I am East")
// }
// if (Direction.West) {
//     console.log("I am West")
// }

//==================================================
//3=>
// enum StatusCode {
//     NotFound = 404,
//     Success = 200,
//     Created = 201,
//     Timeout = 503
// }
// console.log(StatusCode.NotFound)
// console.log(StatusCode.Success)
// console.log(StatusCode.Created)
// console.log(StatusCode.Timeout)

//4=>
// enum Day{
//     Day1,
//     Day2,
//     Day3,
//     Day4
// }

// console.log(Day.Day1)
// console.log(Day.Day2)
// console.log(Day.Day3)
// console.log(Day.Day4)

// enum role {
//     tester,
//     sr_tester,
//     programer,
//     sr_programer,
//     project_manger
// }
// if(role.tester){
//     console.log("startesting")
// }

// enum roles{
//     tester,
//     sr_tester,
//     programmer,
//     sr_programer,
//     manager
// }
// if(roles.tester){
//     console.log("start testing")
// }

//=======================================================
//Program 3=>
// type Person = {
//     firstname: string,
//     lastname: string
// }
// let rupali: Person;
// rupali = {
//     firstname: "rupali",
//     lastname: "dhokchuale"
// }


// //lengthy process
// //fix
// // let priyanka:{firstname:string,lastname:string}={
// //     firstname:"rupali",
// //     lastname:"dhokchaule"
// // }
// let priya: Person = {
//     firstname: "rupali",
//     lastname: "dhokchaule"
// }
// console.log(priya)
//=============================================================
// //program 4
// type Car = {
//     modelNumber: number,
//     color: string,
//     type: string
// }
// let skoda: Car = {
//     modelNumber: 1212,
//     color: "white",
//     type: "Rapid"
// }
// console.log(skoda)
// //===================================================
// //program 5=>
// //Interface=>constant value
// interface PersonA {
//     firstname: string,
//     lastname: string
// }
// let shlok: PersonA = {
//     firstname: "shlok",
//     lastname: "dhokchaule"
// }
// console.log(shlok)

// //============================================================
// //program 6=>
// //use function=>we can use (|)(OR) operator in function for use any two datatypes(e.g=>string,number,boolean)
// function printAddress(Add: string | number) {
//     console.log(`My address is ${Add}`)
// }
// printAddress('12')
// printAddress(12)

// //=================================================================
// let account:"saving"|"current"
// account="saving"
// account="current"
// console.log(account)
