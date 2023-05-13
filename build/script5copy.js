"use strict";
//program 1
// class PersonZ{
//     msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     displayName(){
//         console.log(this.msg)
//     }
// }
// let rr=new PersonZ("hello")
// console.log(rr)
// rr.displayName()
//program 2
class PersonZZ {
    constructor(msg) {
        this.msg = msg;
    }
    displayName1() {
        console.log(this.msg);
        return this.msg;
    }
}
let aa = new PersonZZ("hi");
console.log(aa);
let ss = aa.displayName1();
console.log(ss);
