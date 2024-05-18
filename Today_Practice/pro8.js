

function demo()
{


    return new Promise((_reject,resolve)=>{

        setTimeout(async ()=>{

            resolve("It is a async await demonstation")
    
    
        },2000)



    })

}


async function mydemo()
{

    try{

        console.log("before access the data")

        await demo()

        console.log("After access the data")

    }catch(error)
    {
        console.log(error)
    }
    

}

mydemo()

