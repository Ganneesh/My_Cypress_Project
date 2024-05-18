
//Example of Map

// let obj=new Map()

// obj.set(1,"Ganesh")
// obj.set(2,"Mahesh")
// obj.set(3,"Ramesh")


// obj.forEach((item)=>{


//     console.log(item)
// })

let str="ggggaaannb"

let arr=[]

let obj={}

let dup={}

arr=str.split('')

for(let ch of arr)
{
    if(!obj[ch])
    {
        obj[ch]=1
    }
    else{

        obj[ch]++
        dup[ch]=obj[ch]
    }
}
console.log(dup)






















