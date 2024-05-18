
let num=10
let isprime

for(let i=2;i<=num;i++)
{
 isprime=true
    
        for(let j=2;j<=Math.sqrt(i);j++)
        {
                if(i%j===0)
                {
                    isprime=false
            
                }
                
        }

        if(isprime)
        {
            console.log(i)
        }

    }

    
    
    

