"use strict";
// let A: number = 7841037312
// console.log(A)
// function add(s: number, t: number) {
//     console.log(s + t)
// }
// add(12, 3)
// // function add1(q,w){
// //     if(typeof q =="number" && typeof w =="number"){
// //         console.log(q+w)
// //     }
// //     else{
// //         console.log("incorrect")
// //     }
// // }
// // add1("12","3")//incorrect 
// let ww: number = 10
// ww = 20
// console.log(ww)//20
//=========================================================================
// function sub1(f: number, g: number, result: boolean, msg: string) {
//     if (result) {
//         console.log(msg)
//         console.log(f + g)
//     }
//     else {
//         console.log(msg)
//     }
// }
// sub1(12, 13, true, "hello")//hello 25
// sub1(15, 12, false, "hi")//hi
// //without return type
// function addd(c:number,v:number):void{
//     console.log(c+v)
// }
// addd(12,3)//15
// // with return type
// function mult1(z:number,n:number):number{
//    // console.log(z*n)
//     return z*n
// }
// let mm=mult1(32,22)
// console.log(mm)//704
// function div(j:number,k:number):number{
//     console.log(j/k)
//     return j /k
// }
// let dd= div (35,7)
// console.log(dd)//5
// function div3(r:number,t:number):number{
//     console.log(r/t)
//     return r/t
// }
// let ddd=div3(45,8)
// console.log(ddd)//5.625
// //simple array
// let arr=[11,22,33,44,55,66]
// console.log(arr)//[ 11, 22, 33, 44, 55, 66 ]
// let ar:number[]=[33,22,55,44]
// console.log(ar)//[ 33, 22, 55, 44 ]
// let ar1:[number,string]=[23,"hello"]
// console.log(ar1)//[ 23, 'hello' ]
// let ar2:[number,string,boolean]=[332,"hi",true]
// console.log(ar2)//[ 332, 'hi', true ]
//=====================================================
// let B = 10
// console.log(B)
// //==============================================================
// let firstname = "rupali"
// console.log(firstname)
// let candrivee = true
// console.log(candrivee)
// let BB: number[] = [11, 22, 33, 44, 55]
// console.log(BB)
// let ff: string[] = ["fruit", "vegitable", "seeds"]
// console.log(ff)
// let gg: [string, string, number] = ["pune", "nashik", 89]
// gg.push(34)
// gg.push("delhi")
// console.log(gg)
// //=================================================================
// let Obj: { firstname1: string, lastname1: string, age: number }
// Obj = {
//     firstname1: "sarika",
//     lastname1: "kokane",
//     age: 32
// }
// console.log(Obj)
// //===================================================================
// let fruit1: string[] = ["banana", "mango", "grapes"]
// fruit1.forEach(function(el){
//     return (el.toLowerCase)
// })
// console.log(fruit1)
//===============================================================
function additon4(x, y) {
    console.log(x + y);
}
additon4(12, 3);
//===============================================================
let cities = ["pune", "nagpur", "ahmednagar", "nashik"];
console.log(cities);
//===============================================================
let arr = [11, 22, 33, 44, 55];
console.log(arr);
//================================================================
let mul = ["rupa", "dhokchaule", 23];
mul.push("shlok");
console.log(mul);
//================================================================
// let obj={
//     firstName:"rupali",
//     lastName:"dhokchaule"
// }
let obj2;
obj2 = {
    firstname: "rupali",
    lastname: "dhokchaule",
    age: 31
};
let obj3 = obj2.firstname;
console.log(obj3);
//=============================================================
// function add6(x:number,y:number):void{//:void are not a return any value
//     console.log(x+y)
// }
// add6(12,3)//15
function mul7(x, y) {
    console.log(x + y); //17
    return (x * y);
}
let M = mul7(12, 5);
console.log(M); //60
//============================================
let fruit = ["banana", "mango", "orange", "dragon"];
fruit.forEach(function (el) {
    console.log(el.toUpperCase);
});
console.log(fruit);
