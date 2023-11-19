
let pattern=/G/
let  str="Ganesh MadaneGGGGG"
count=0
console.log(pattern.test(str))

for(let i=0;i<str.length;i++)
{
    if(pattern.test(str[i]))
    {
        count++
    }
}
console.log("Occurance of G:- "+count)

