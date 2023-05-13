"use strict";
// single inheritance 
//inheritance=>parent property or method accessable in child reference variable
// program1
class FatherA {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}
class SonA extends FatherA {
    constructor() {
        super(...arguments);
        this.sname = "shlok";
    }
}
let shree = new SonA("shlok", "dhokchaule");
console.log(shree.firstName);
console.log(shree.lastName);
console.log(shree.sname);
let shrikant = new FatherA("shikant", "dhokchaule");
shrikant.displayName();
// program 2
// single inheritance 
class FatherB {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}
class SonB extends FatherB {
    constructor(fn, ln, sn) {
        super(fn, ln);
        this.sname = sn;
    }
    displaySName() {
        console.log(this.sname + this.lastName);
    }
}
let Anu = new SonB("shirish", "deshpande", "chinmay");
console.log(Anu.firstName);
console.log(Anu.lastName);
console.log(Anu.sname);
Anu.displayName();
Anu.displaySName();
//program 3
//multiple inheritance
//Grandfather=>Father=>Childern 
class GrandFatherA {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayGName() {
        console.log(this.firstName + this.lastName);
    }
}
class FatherC extends GrandFatherA {
    constructor(fn, ln, ffn) {
        super(fn, ln);
        this.fname = ffn;
    }
    displayFName() {
        console.log(this.fname + this.lastName);
    }
}
class SonC extends FatherC {
    constructor(fn, ln, ffn, sname) {
        super(fn, ln, ffn);
        this.sname = sname;
    }
    displaySName() {
        console.log(this.sname + this.lastName);
    }
}
let ram = new SonC("shau", "wade", "shri", "nitin");
console.log(ram.firstName);
console.log(ram.lastName);
console.log(ram.sname);
console.log(ram.fname);
ram.displayGName();
ram.displaySName();
ram.displayFName();
// program 4
//hierarchical inheritance
//Father>son=>daugther
class FatherD {
    constructor(fn, ln) {
        this.fname = fn;
        this.lname = ln;
    }
    displayF() {
        console.log(this.fname + this.lname);
    }
}
class SisterA extends FatherD {
    constructor(fn, ln, sname) {
        super(fn, ln);
        this.sname = sname;
    }
    displayS() {
        console.log(this.sname + this.lname);
    }
}
class BrotherA extends FatherD {
    constructor(fn, ln, bname) {
        super(fn, ln);
        this.bname = bname;
    }
    displayB() {
        console.log(this.bname + this.lname);
    }
}
