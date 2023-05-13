"use strict";
//Interface
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
class PersonZ {
    displayFullName() {
        return `rupal dhokchaule`;
    }
    displayAge() {
        return 23;
    }
    salaryy() {
        return 10000;
    }
}
let amolZ = new PersonZ();
amolZ.displayAge();
amolZ.displayFullName();
amolZ.salaryy();
class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    dispalyGF() {
        console.log(this.firstName + this.lastName);
    }
}
class FatherN extends GrandFather {
    constructor(fn, ln, fname) {
        super(fn, ln);
        this.fname = fname;
    }
    dispalyFN() {
        console.log(this.fname + this.lastName);
    }
    dispayAddress() {
        return "Flat No=307,A-wing,near Datta mandir,manjri,pune";
    }
}
let nn = new FatherN("gajanan", "dhokcahule", "shrikant");
// nn.dispalyFN()
// nn.dispalyGF()
// nn.dispayAddress()
console.log(nn);
