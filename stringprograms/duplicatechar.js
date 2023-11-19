
let str="abcabacdeeef"

let obj={}

let arr=[]

let duplicates={}

for(let i=0;i<str.length;i++)
{
    arr.push(str.charAt(i))
}

for(let char of arr)
{

    if(obj[char])
    {
        obj[char]++

        if(obj[char]>1)
        {
            duplicates[char]=obj[char]  
        }
    }
 

}
console.log(duplicates)