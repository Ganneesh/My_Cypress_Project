
let arr=[1,2,3,4,5,6,7]

arr.map((num)=>{

console.log(num*2)


})

arr.filter((num)=>{

if(num%2==0)
{
    console.log(num)
}


})

let arr1=arr.sort((a,b)=>a-b)

console.log(arr1)

let ans=arr.reduce((sum,num)=>sum+num,0)

console.log(ans)

