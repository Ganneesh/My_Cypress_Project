class demo3
{

display()
{
    if(arguments.length===2)
    {
        //return arguments[0]-arguments[1]
        console.log(arguments[0]+arguments[1])
    }

    if(arguments.length===1)
    {

        console.log(arguments[0])
    }

    
}


}

let obj=new demo3()

obj.display(20)
obj.display(10,20)