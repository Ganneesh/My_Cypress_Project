
 

let arr=[0,0,0,1,1,1]

//let nonzero=arr.filter((num)=>num>0)

let arrsize = arr.map((num) => (num > 0 ? 0 : 1))

console.log(arrsize) 