let arr=[3,6,4,5,2]

let arr1=arr.sort((a,b)=>(a-b))

cy.log(arr1)
let max=arr1[0]
for(let i=arr1.length;i>=0;i--)
{
    if(max>arr1[i])
        {
            max=arr1[i]
        }

}
for(let i=0;i<arr1.length;i++)
{
    
    if(arr1[i]===max)
    {
        cy.log(arr1[i]-1)
    }
}


