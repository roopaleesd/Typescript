"use strict";
//program 1=>
class PersonA {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let shlok = new PersonA("shlok");
console.log(shlok);
//program 2
//public are globly scope
//private are block scope
class PersonB {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let rupali = new PersonB("rupali");
let nm = rupali.displayName();
//program 2
class PersonC {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let chiu = new PersonC('Rupali');
console.log(chiu.name);
let Q = chiu.displayName();
console.log(Q);
//program 3
class PersonD {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        this.greet();
        return this.name;
    }
    greet() {
        console.log('hello i am learning js');
    }
}
let subhangi = new PersonD("subhangi");
//console.log(subhangi.name)//name is not access bucause name is private scope
let q11 = subhangi.displayName();
console.log(q11);
//console.log(subhangi.greet())//greet are private scope
class PersonE {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
    }
}
let sarika = new PersonE("sarika", "kokane");
