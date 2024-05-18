let arr=[10,9,5,8,24]


// arr.reduce((num)=>{

//   if(num>)

// })

console.log(Math.max(...arr))
console.log(Math.min(...arr))

let min=arr[0]

console.log("number is :- "+min)

for(let i=0;i<arr.length;i++)
{
  if(min<arr[i])
  {
    min=arr[i]
  }
}

console.log("Max Number  element is :- "+min)