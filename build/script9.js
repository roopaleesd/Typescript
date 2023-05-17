"use strict";
//program 1
let x = "hello";
console.log(x);
//program 2
// let x1:number=4;
// console.log(x1 as string).length)//'4
//program 3
// let x2:unknown = "hello"
// console.log((<string>x2).length)
let x2 = "hello";
console.log(x2.length);
//program 4
function addition(x, y) {
    return [x, y];
}
let rr = addition("rupa", 4);
let r2 = addition("rupali", "dhokchaule");
let r3 = addition(7, 7);
let r4 = addition(4, '4');
