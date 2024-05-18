import fs from 'fs/promises'


fs.readFile('myfile.json','utf8').then((data)=>{

    let existdata=JSON.parse(data)

    const newData = {
        "Name": "NewName",
        "lastname": "NewLastname"
      }

      const updatedData = { ...existdata, ...newData }


   let mydata=JSON.stringify(updatedData,null,2)+'\n';


   return  fs.writeFile('myfile.json',mydata,{ flag: 'a' })

})

