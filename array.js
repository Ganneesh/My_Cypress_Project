let str="aaiieo"
let arr1=[]
let map1={}
let duplicatesCount=0

for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)==='a'||str.charAt(i)==='e'||str.charAt(i)==='i'||str.charAt(i)==='o'||str.charAt(i)==='u')
    {
        arr1.push(str.charAt(i))

    }


}

for(let char of arr1)
{
if(map1[char])
{
    map1[char]++

        if (map1[char] === 2) 
        {
         duplicatesCount++;
        }
} 
       else {
           map1[char] = 1;
             }
}

console.log(map1)






let data=[1,2,3,4,4,4]

let myset=new Set(data)

console.log(myset)