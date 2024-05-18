

let arr=[10,9,5,8,24]

let min=arr[0]

console.log("number is :- "+min)

for(let i=0;i<arr.length;i++)
{
  if(min>arr[i])
  {
    min=arr[i]
  }
}

console.log("Minimum element is :- "+min)