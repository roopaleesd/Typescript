//program 1=>
class PersonA{
    name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName():string{
        return this.name
    }
}
let shlok=new PersonA("shlok")
console.log(shlok)

//program 2
//public are globly scope
//private are block scope
class PersonB{
    public name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName():string{
        return this.name
    }
}
let rupali=new PersonB("rupali")
let nm=rupali.displayName()

//program 2
class PersonC{
    public name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName():string{
        return this.name
    }
}
let chiu=new PersonC('Rupali')
console.log(chiu.name)
let Q=chiu.displayName()
console.log(Q)

//program 3
class PersonD{
    private name:string
    constructor(nm:string){
        this.name=nm
    }
    public displayName():string{
        this.greet()
        return this.name
    }
    private greet(){
        console.log('hello i am learning js')
    }
}

let subhangi =new PersonD("subhangi")
//console.log(subhangi.name)//name is not access bucause name is private scope
let q11=subhangi.displayName()
console.log(q11)
//console.log(subhangi.greet())//greet are private scope

class PersonE{
    constructor(public name:string,public lname:string){

    }
}
let sarika=new PersonE("sarika","kokane")