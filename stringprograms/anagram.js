

let sr1="Ganesh"
let sr2="hsneag"

let str1=sr1.toLocaleLowerCase().replace('/\s/g','')
let str2=sr2.toLocaleLowerCase().replace('/\s/g','')

let sortedstr1=str1.split('').sort().join('')
let sortedstr2=str2.split('').sort().join('')

if(sortedstr1===sortedstr2)
{
    console.log("String are anagarm")
}
else
{
    console.log("Strings are not anagram")
}






