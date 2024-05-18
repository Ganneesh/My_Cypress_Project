
let arr=[3,4,5,6,2,1]

let arr1=[... new Set(arr)].sort((a,b)=>a-b)

console.log(arr1[1])

let arr2=arr.sort((a,b)=>a-b)
 