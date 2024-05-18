
function display(num)
{

    return new Promise((resolve,reject)=>{


        if(num==20)
        {
            resolve("age is matched"+20)
        }
        else
        {
            reject("age is less than:- "+20)
        }


    })

}


display(20).then((data)=>{


    console.log(data)

}).catch((data)=>{

console.log(data)

}).finally(()=>{

    console.log("I am always excuted")
})


