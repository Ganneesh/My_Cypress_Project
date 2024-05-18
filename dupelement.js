//let arr=[1,4,6,3,3,4,8,9,9]

let arr=['a','a']



let obj=new Set()

let arr1=[]

for(let num of arr)
{
        
        if(obj.has(num))
        {
        arr1.push(num)
        }
        else
        {
            obj.add(num)
        }
    
}
console.log(arr1)