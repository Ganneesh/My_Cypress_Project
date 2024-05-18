


 function demo()
 {
    try{

        return new Promise((reject,reslove)=>{


            setTimeout(()=>{
    
                reslove("Everything is fines")
    
    
            },2000)
    
           
    
        })
      
    }
    catch(error)
    {
        console.log(exception)
    }
    
 }

 demo()