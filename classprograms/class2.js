class demo1{

    constructor(a,b)
    {
        this.a=a
        this.b=b

    }

    display()
    {
        console.log("Addition is :- "+(this.a+this.b))

    }

}

class demo2 extends demo1{

    constructor(a,b)
    {
        super(a,b)
        
    }

}

let obj=new demo2(10,20)

console.log("Access the variable :- "+ obj.a + " "+obj.b)
obj.display()