//promise example 

function demo(name)
{
    return new Promise((resolve,reject)=>{


       

            if(name==="Ganesh")
            {
            setTimeout(()=>{
                resolve("Yes this is your name")
            },2000)
            }
            else    
            {
                reject("No your age is not match")
            }
        
    })
}

demo("Ganesh").then((data)=>{

console.log(data)


}).catch((data1)=>{


    console.log(data1)
})