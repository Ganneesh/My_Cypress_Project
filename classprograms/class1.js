class demo1
{
   
    constructor(a,b)
    {
        
       this.a=a
        this.b=b

    }

 addition()
    {
    
console.log("Addition is :- "+(this.a+this.b))
    }
}

let obj=new demo1(10,20)

obj.addition()