

let arr=[5,5,5,4,3,2,1]

console.log(arr.sort((a, b)=>a-b))

let obj= new Set(arr.sort((a,b)=>a-b))

console.log(obj)

let strarr=["ball","arg","abc"]

console.log(strarr.sort())