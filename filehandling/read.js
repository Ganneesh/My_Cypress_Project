 
import fs from 'fs/promises';

fs.readFile("myfile.json").then((data)=>{

let data1=JSON.parse(data)
    console.log(data1.Name)


}).catch((error)=>{

console.log(error)

})