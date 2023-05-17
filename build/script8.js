"use strict";
//Overloading
//same class,same method, different signature
class Addition {
    addition(x, y) {
        console.log(x + y);
    }
    addtion(x, y, z) {
        console.log(x + y + z);
    }
    static addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a);
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z);
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y);
        }
    }
}
Addition.addition(12, 11, 2, 5);
Addition.addition(12, 11, 5, undefined);
Addition.addition(12, 12, undefined, undefined);
//Over riding
//different class, same method name, same signature
class worldBank {
    loan(x) {
        return 10 + x;
    }
    save(y) {
        return 11 + y;
    }
}
class SBI extends worldBank {
    loan(x) {
        return 10 + x * 10;
    }
    save(y) {
        return 11 + y * 10;
    }
}
let nagpur = new SBI();
nagpur.save(12);
nagpur.loan(13);
// abstraction class   --- cannot create instance 
// interface - cannot create instance
class Student {
    constructor() {
        this.displayCountry = () => console.log('India');
    }
}
class TeacherA extends Student {
    fullName() {
        return "rupa";
    }
}
let a11 = new TeacherA();
a11.displayCountry();
a11.fullName();
// abstract  class Student {
//     public abstract fullName():string 
//     displayCountry = ():void => console.log('India')  ;
// }
// class TeacherA extends Student{
//     public  fullName():string {
//         return "rupali"
//     }
// }
// let a11 = new TeacherA();
// a11.displayCountry()
// a11.fullName()
