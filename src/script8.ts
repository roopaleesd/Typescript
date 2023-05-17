//Overloading
//same class,same method, different signature
class Addition{
    addition(x:number,y:number):void{
        console.log(x+y)
    }
    addtion(x:number,y:number,z:number):void{
        console.log(x+y+z)
    }
   static addition(x:any,y:any,z:any,a:any):void{
    if(x!=undefined && y!=undefined && z!=undefined && a!=undefined){
        console.log(x+y+z+a)
    }
    else if(x!=undefined && y!=undefined && z!=undefined){
        console.log(x+y+z)
    }
    else if(x!=undefined && y!=undefined){
        console.log(x+y)
    }
   } 
}
Addition.addition(12,11,2,5)
Addition.addition(12,11,5,undefined)
Addition.addition(12,12,undefined,undefined)

//Over riding
//different class, same method name, same signature

class worldBank{
    loan(x:number):number{
        return 10+x
    }
    save(y:number):number{
        return 11+y
    }
}

class SBI extends worldBank {

    public override loan(x:number):number{
        return 10 + x*10
    }
    public override save(y:number):number {
        return 11 + y*10
    }
}
let nagpur = new SBI()
nagpur.save(12)
nagpur.loan(13)

// abstraction class   --- cannot create instance 
// interface - cannot create instance
abstract class  Student{
    public abstract fullName():string
    displayCountry=():void => console.log('India')
}
class TeacherA extends Student{
    public fullName(): string {
        return "rupa"
    }
}
let a11=new TeacherA();
a11.displayCountry()
a11.fullName()

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