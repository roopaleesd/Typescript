// single inheritance 
//inheritance=>parent property or method accessable in child reference variable
// program1

class FatherA {
    firstName:string;
    lastName:string;
 constructor(fn:string,ln:string){
        this.firstName = fn
        this.lastName = ln
    }
    displayName():void{
        console.log(this.firstName + this.lastName)
    }
}
class SonA  extends FatherA{
    sname:string = "shlok";
}

let shree = new SonA("shlok","dhokchaule");
console.log(shree.firstName)
console.log(shree.lastName)
console.log(shree.sname)

let shrikant = new FatherA("shikant","dhokchaule") 
shrikant.displayName()

// program 2
// single inheritance 
class FatherB {
    firstName: string;
    lastName: string;
constructor(fn: string, ln: string) {
        this.firstName = fn
        this.lastName = ln
    }
    displayName(): void {
        console.log(this.firstName + this.lastName)
    }

}
class SonB extends FatherB {
    sname: string
    constructor(fn: string, ln: string, sn: string) {
        super(fn, ln)
        this.sname = sn
    }
displaySName(): void {
        console.log(this.sname + this.lastName)
    }
}

let Anu = new SonB("shirish", "deshpande","chinmay");
console.log(Anu.firstName)
console.log(Anu.lastName)
console.log(Anu.sname)
Anu.displayName()
Anu.displaySName()

//program 3
//multiple inheritance
//Grandfather=>Father=>Childern 
class GrandFatherA {
 firstName:string 
    lastName:string 
constructor(fn:string , ln:string){
        this.firstName = fn
        this.lastName =ln
    }
    displayGName():void{
        console.log(this.firstName+ this.lastName)
    }

}

class FatherC extends GrandFatherA {
    fname:string
    constructor(fn:string , ln:string ,ffn:string){
        super(fn,ln)
        this.fname = ffn
    }

    displayFName():void{
        console.log(this.fname+ this.lastName)
    }
}

class SonC extends FatherC {
    sname:string 
    constructor(fn:string , ln:string ,ffn:string,sname:string){
        super(fn , ln ,ffn)
        this.sname = sname
    }

    displaySName():void{
        console.log(this.sname+ this.lastName)
    }

}

let ram = new SonC("shau","wade","shri","nitin")
console.log(ram.firstName)
console.log(ram.lastName)
console.log(ram.sname)
console.log(ram.fname)
ram.displayGName()
ram.displaySName()
ram.displayFName()

// program 4
//hierarchical inheritance
//Father>son=>daugther
class FatherD {
    fname:string
    lname:string

    constructor(fn:string , ln:string){
        this.fname = fn
        this.lname = ln
    }

    displayF(){
        console.log(this.fname + this.lname)
    }
}

class SisterA extends FatherD {
    sname:string

    constructor(fn:string , ln:string, sname:string){
        super(fn,ln)
        this.sname = sname       
    }

    displayS(){
        console.log(this.sname + this.lname)
    }
}
class BrotherA extends FatherD {
    bname:string

    constructor(fn:string , ln:string, bname:string){
        super(fn,ln)
        this.bname = bname       
    }

    displayB(){
        console.log(this.bname + this.lname)
    }
}


