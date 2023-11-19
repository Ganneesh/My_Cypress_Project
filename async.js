

 async function display()
{
console.log("Ganesh")
}


async function show(num)
{

    for(let i=1;i<=5;i++)
    {

        if(num===3)
        {
            await display()
        }
        console.log(i)

    }
   

}

show(3)