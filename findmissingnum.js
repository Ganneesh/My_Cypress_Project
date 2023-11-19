
let arr=[1,2,3,5,6,7,8]

let n=arr.length+1

let exsum=(n*(n+1))/2

let actualsum=arr.reduce((acc,num)=>acc+num,0)

let missnum=exsum-actualsum

console.log(missnum)